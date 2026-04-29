const ANIMES = [
  { title: "NARUTO SHIPPUDEN", rating: "14", genres: "Supernatural, Ação, Drama, Fantasy", desc: "Achamos que você vai gostar", ep: "1", color: "#fdc11b", bg: ["./imagens/wallhaven-ex7qp8.jpg","./imagens/wallhaven-48vq3j.jpg"] },
  { title: "ONE PIECE", rating: "A14", genres: "Sobrenatural, Ação, Comédia", desc: "Achamos que você vai gostar", ep: "1", color: "#055dcf", bg: ["https://w.wallhaven.cc/full/yx/wallhaven-yx3kok.jpg","https://w.wallhaven.cc/full/m9/wallhaven-m9y2q9.jpg"] },
  { title: "BLEACH", rating: "A18", genres: "Vampiros, Ação, Romance, Fantasia", desc: "Achamos que você vai gostar", ep: "1", color: "rgb(5, 176, 199)", bg: ["https://w.wallhaven.cc/full/x6/wallhaven-x6q27o.png","https://w.wallhaven.cc/full/pk/wallhaven-pkrx9p.png"] },
  { title: "HUNTERXHUNTER", rating: "14", genres: "Ação, Histórico, Sobrenatural", desc: "Achamos que você vai gostar", ep: "1", color: "#22a708", bg: ["./imagens/hxh.jpg","./imagens/hxxxh.png"] },
  { title: "FULLMETAL ALCHEMIST", rating: "17", genres: "Ação, Drama, Mistério, Fantasia", desc: "Achamos que você vai gostar", ep: "1", color: "#da0c2e", bg: ["https://w.wallhaven.cc/full/j5/wallhaven-j5o23p.jpg","https://w.wallhaven.cc/full/5w/wallhaven-5w82z9.jpg"] },
];

const AUTO_INTERVAL = 7000, BG_INTERVAL = 4000, SLIDE_DURATION = 650;
let currentIndex = 0, isTransitioning = false;
let bgSlidesA = [], bgSlidesB = [], bgSlidesC = [];
let bgIndexA = 0, bgIndexB = 0, bgIndexC = 0;
let bgTimerA = null, autoTimer = null;

const crStage = document.getElementById('crStage');
const imgWrapA = document.getElementById('imgWrapA');
const imgWrapB = document.getElementById('imgWrapB');
const imgWrapC = document.getElementById('imgWrapC');
const logoWrapA = document.getElementById('logoWrapA'), logoTextA = document.getElementById('logoTextA');
const ratingA = document.getElementById('ratingA'), genresA = document.getElementById('genresA');
const descA = document.getElementById('descA'), btnsA = document.getElementById('btnsA');
const playLabelA = document.getElementById('playLabelA'), metaWrapA = document.getElementById('metaWrapA');
const logoWrapB = document.getElementById('logoWrapB'), logoTextB = document.getElementById('logoTextB');
const ratingB = document.getElementById('ratingB'), genresB = document.getElementById('genresB');
const descB = document.getElementById('descB'), btnsB = document.getElementById('btnsB');
const playLabelB = document.getElementById('playLabelB'), metaWrapB = document.getElementById('metaWrapB');
const logoWrapC = document.getElementById('logoWrapC'), logoTextC = document.getElementById('logoTextC');
const ratingC = document.getElementById('ratingC'), genresC = document.getElementById('genresC');
const descC = document.getElementById('descC'), btnsC = document.getElementById('btnsC');
const playLabelC = document.getElementById('playLabelC'), metaWrapC = document.getElementById('metaWrapC');
const dotsWrap = document.getElementById('dotsWrap');
const progressBar = document.getElementById('progressBar');
const particlesContainer = document.getElementById('particlesContainer');

const CONTENT_A = [logoWrapA, metaWrapA, descA, btnsA];
const CONTENT_B = [logoWrapB, metaWrapB, descB, btnsB];
const CONTENT_C = [logoWrapC, metaWrapC, descC, btnsC];

function populatePanel(anime, ids) {
  ids.logoText.textContent = anime.title;
  ids.logoText.style.color = anime.color;
  ids.rating.textContent = anime.rating;
  ids.genres.textContent = anime.genres;
  ids.desc.textContent = anime.desc;
  ids.playLabel.textContent = 'COMEÇAR A ASSISTIR E' + anime.ep;
}

function buildBg(container, anime) {
  const shadow = container.querySelector('.cr-img-shadow');
  container.innerHTML = '';
  if (shadow) container.appendChild(shadow);
  const slides = [];
  anime.bg.forEach((url, i) => {
    const div = document.createElement('div');
    div.className = 'cr-img-bg' + (i === 0 ? ' active' : '');
    div.style.backgroundImage = "url('" + url + "')";
    container.insertBefore(div, shadow);
    slides.push(div);
  });
  return slides;
}

function showContent(els) { els.forEach(el => el.classList.add('visible')); }
function hideContent(els) { els.forEach(el => el.classList.remove('visible')); }

function startProgress() {
  progressBar.style.transition = 'none';
  progressBar.style.width = '0%';
  requestAnimationFrame(() => requestAnimationFrame(() => {
    progressBar.style.transition = 'width ' + AUTO_INTERVAL + 'ms linear';
    progressBar.style.width = '100%';
  }));
}
function stopProgress() {
  progressBar.style.transition = 'none';
  progressBar.style.width = '0%';
}

function starSVG() {
  return '<svg class="cr-star" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
}

function buildDots() {
  dotsWrap.innerHTML = '';
  ANIMES.forEach((anime, i) => {
    const btn = document.createElement('button');
    btn.className = 'cr-dot-btn' + (i === 0 ? ' active' : '');
    btn.setAttribute('aria-label', 'Ir para ' + anime.title);
    btn.innerHTML = starSVG();
    btn.addEventListener('click', () => {
      if (isTransitioning) return;
      const direction = i > currentIndex ? 'left' : 'right';
      btn.classList.add('clicked');
      setTimeout(() => btn.classList.remove('clicked'), 400);
      const rect = btn.getBoundingClientRect();
      spawnShimmerParticles(rect.left + rect.width / 2, rect.top + rect.height / 2);
      if (i !== currentIndex) goTo(i, direction);
    });
    dotsWrap.appendChild(btn);
  });
}

function updateDots() {
  dotsWrap.querySelectorAll('.cr-dot-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === currentIndex);
  });
}

function spawnShimmerParticles(x, y) {
  const COUNT = 8;
  const colors = ['#ffffff', '#cccccc', '#aaaaaa', '#f47521', '#ffcc44'];
  for (let i = 0; i < COUNT; i++) {
    const p = document.createElement('div');
    const size = 4 + Math.random() * 5;
    const color = colors[Math.floor(Math.random() * colors.length)];
    p.style.cssText = 'position:absolute;pointer-events:none;left:' + x + 'px;top:' + y + 'px;width:' + size + 'px;height:' + size + 'px;background:' + color + ';transform:translate(-50%,-50%) rotate(45deg);border-radius:1px;opacity:1;';
    particlesContainer.appendChild(p);
    const angle = (Math.PI * 2 * i) / COUNT + (Math.random() - 0.5) * 0.5;
    const speed = 35 + Math.random() * 50;
    const dx = Math.cos(angle) * speed, dy = Math.sin(angle) * speed;
    const dur = 400 + Math.random() * 200;
    const anim = p.animate([
      { transform: 'translate(-50%,-50%) rotate(45deg) scale(1)', opacity: 1 },
      { transform: 'translate(calc(-50% + ' + dx + 'px),calc(-50% + ' + dy + 'px)) rotate(405deg) scale(0)', opacity: 0 }
    ], { duration: dur, easing: 'cubic-bezier(0.22,1,0.36,1)', fill: 'forwards' });
    anim.onfinish = () => p.remove();
  }
}

function goTo(idx, direction) {
  if (isTransitioning) return;
  isTransitioning = true;
  clearTimeout(autoTimer); clearInterval(bgTimerA); stopProgress();
  const targetAnime = ANIMES[idx];
  const goingLeft = direction === 'left';
  if (goingLeft) {
    populatePanel(targetAnime, { logoText: logoTextB, rating: ratingB, genres: genresB, desc: descB, playLabel: playLabelB });
    bgSlidesB = buildBg(imgWrapB, targetAnime); bgIndexB = 0;
    hideContent(CONTENT_B);
    crStage.classList.remove('sliding-left', 'sliding-right');
    crStage.style.transform = 'translateX(-33.333%)';
    void crStage.offsetWidth;
    crStage.classList.add('sliding-left');
    crStage.style.transform = 'translateX(-66.666%)';
    setTimeout(() => showContent(CONTENT_B), SLIDE_DURATION * 0.3);
    setTimeout(() => {
      populatePanel(targetAnime, { logoText: logoTextA, rating: ratingA, genres: genresA, desc: descA, playLabel: playLabelA });
      bgSlidesA = buildBg(imgWrapA, targetAnime); bgIndexA = 0;
      showContent(CONTENT_A); hideContent(CONTENT_B);
      crStage.classList.remove('sliding-left', 'sliding-right');
      crStage.style.transform = 'translateX(-33.333%)';
      finishTransition(idx);
    }, SLIDE_DURATION + 20);
  } else {
    populatePanel(targetAnime, { logoText: logoTextC, rating: ratingC, genres: genresC, desc: descC, playLabel: playLabelC });
    bgSlidesC = buildBg(imgWrapC, targetAnime); bgIndexC = 0;
    hideContent(CONTENT_C);
    crStage.classList.remove('sliding-left', 'sliding-right');
    crStage.style.transform = 'translateX(-33.333%)';
    void crStage.offsetWidth;
    crStage.classList.add('sliding-right');
    crStage.style.transform = 'translateX(0%)';
    setTimeout(() => showContent(CONTENT_C), SLIDE_DURATION * 0.3);
    setTimeout(() => {
      populatePanel(targetAnime, { logoText: logoTextA, rating: ratingA, genres: genresA, desc: descA, playLabel: playLabelA });
      bgSlidesA = buildBg(imgWrapA, targetAnime); bgIndexA = 0;
      showContent(CONTENT_A); hideContent(CONTENT_C);
      crStage.classList.remove('sliding-left', 'sliding-right');
      crStage.style.transform = 'translateX(-33.333%)';
      finishTransition(idx);
    }, SLIDE_DURATION + 20);
  }
}

function finishTransition(idx) {
  currentIndex = idx; isTransitioning = false; updateDots();
  bgTimerA = setInterval(() => {
    if (bgSlidesA.length < 2) return;
    bgSlidesA[bgIndexA].classList.remove('active');
    bgIndexA = (bgIndexA + 1) % bgSlidesA.length;
    bgSlidesA[bgIndexA].classList.add('active');
  }, BG_INTERVAL);
  startProgress();
  const nextIdx = (currentIndex + 1) % ANIMES.length;
  autoTimer = setTimeout(() => goTo(nextIdx, 'left'), AUTO_INTERVAL);
}

function init() {
  const anime = ANIMES[0];
  populatePanel(anime, { logoText: logoTextA, rating: ratingA, genres: genresA, desc: descA, playLabel: playLabelA });
  bgSlidesA = buildBg(imgWrapA, anime); bgIndexA = 0;
  hideContent(CONTENT_B); hideContent(CONTENT_C);
  requestAnimationFrame(() => setTimeout(() => showContent(CONTENT_A), 100));
  buildDots();
  bgTimerA = setInterval(() => {
    if (bgSlidesA.length < 2) return;
    bgSlidesA[bgIndexA].classList.remove('active');
    bgIndexA = (bgIndexA + 1) % bgSlidesA.length;
    bgSlidesA[bgIndexA].classList.add('active');
  }, BG_INTERVAL);
  startProgress();
  autoTimer = setTimeout(() => goTo(1, 'left'), AUTO_INTERVAL);
}

init();