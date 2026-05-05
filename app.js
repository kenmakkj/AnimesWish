const ANIMES = [
  {
    title: "NARUTO SHIPPUDEN",
    logo: "./logos/naruto.avif",
    rating: "14", genres: "Ação, Aventura, Fantasia",
    desc: "Achamos que você vai gostar", ep: "1", color: "#fdc11b",
    bg: ["./imagens/wallhaven-ex7qp8.jpeg","./imagens/wallhaven-48vq3j.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/19556/",
    linkManga: "https://taiyo.moe/media/82a9889d-d852-42ec-965d-082dc6a57afe",
  },
  {
    title: "ONE PIECE",
    logo: "./logos/onepiece3.png",
    logoWidth: "560px", logoHeight: "560px",
    rating: "12", genres: "Ação, Aventura, Comédia",
    desc: "Achamos que você vai gostar", ep: "1", color: "#055dcf",
    bg: ["https://w.wallhaven.cc/full/yx/wallhaven-yx3kok.jpg","./imagens/onepiece.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/71870b001",
    linkManga: "https://taiyo.moe/media/3cec0768-c247-468c-97fe-76e9a556d6ee",
  },
  {
    title: "BLEACH",
    logo: "./logos/bleach.png",
    logoWidth: "500px", logoHeight: "500px",
    rating: "14", genres: "Ação, Sobrenatural, Aventura",
    desc: "Achamos que você vai gostar", ep: "1", color: "rgb(5, 176, 199)",
    bg: ["./imagens/bleach.jpeg","./imagens/bleach2.jpeg"],
    linkAssistir: "https://animesdigital.org/video/a/2600/",
    linkManga: "https://taiyo.moe/media/c99cf6c3-5a24-465d-a701-8668de840c1e",
  },
  {
    title: "HUNTERXHUNTER",
    logo: "./logos/hxh.avif",
    rating: "14", genres: "Ação, Aventura, Fantasia",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/hxh.jpg","./imagens/hxh1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/81705/",
    linkManga: "https://taiyo.moe/media/7f00c72f-cb0d-4341-92d3-cf0858060174",
  },
  {
    title: "FULLMETAL ALCHEMIST",
    logo: "./logos/fullmetal.avif",
    rating: "14", genres: "Ação, Aventura, Drama, Fantasia",
    desc: "Achamos que você vai gostar", ep: "1", color: "#da0c2e",
    bg: ["./imagens/fullmetal.jpg","./imagens/fullmetal1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/53521/",
    linkManga: "https://taiyo.moe/media/ded40fe0-1d9f-488c-9530-84c78aaa518e",
  },
  {
    title: "HORIMIYA",
    logo: "./logos/horimiya.avif",
    rating: "14", genres: "Romance, Comédia, Slice of Life",
    desc: "Achamos que você vai gostar", ep: "1", color: "#da0c2e",
    bg: ["./imagens/horimiya.png","./imagens/horimiya1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/25175/",
    linkManga: "https://taiyo.moe/media/f2f3c60f-eb26-4f51-a606-36f0b3d35334",
  },
  {
    title: "JUJUTSU KAISEN",
    logo: "./logos/jujutsu.avif",
    rating: "17", genres: "Ação, Sobrenatural, Horror",
    desc: "Achamos que você vai gostar", ep: "1", color: "#4c07a7",
    bg: ["./imagens/jujutsu.png","./imagens/megumi.png"],
    linkAssistir: "https://animesdigital.org/video/a/25367b001",
    linkManga: "https://taiyo.moe/media/266cdf32-92f0-45b5-9213-651146309dd8",
  },
  {
    title: "FRIEREN",
    logo: "./logos/frieren.avif",
    logoWidth: "460px", logoHeight: "460px",
    rating: "10", genres: "Fantasia, Aventura, Drama",
    desc: "Achamos que você vai gostar", ep: "1", color: "#4c07a7",
    bg: ["./imagens/frieren.jpg","./imagens/frieren1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/110794/",
    linkManga: "https://taiyo.moe/media/0e324b49-39e0-4720-a8c6-c38a59d9e1f2",
  },
  {
    title: "KIMETSU NO YAIBA",
    logo: "./logos/kimetsuu.avif",
    logoWidth: "250px", logoHeight: "250px",
    rating: "16", genres: "Ação, Sobrenatural, Histórico",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/kimetsu.jpg","./imagens/kimetsuu.jpeg"],
    linkAssistir: "https://animesdigital.org/video/a/25707z001",
    linkManga: "https://taiyo.moe/media/c34b80f3-8d27-403f-a2f2-cf37fe88f600",
  },
  {
    title: "MY HERO ACADEMIA",
    logo: "./logos/boku.avif",
    logoWidth: "500px", logoHeight: "500px",
    rating: "12", genres: "Ação, Super-herói, Escola",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/boku.jpeg","./imagens/boku1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/3304z002",
    linkManga: "https://taiyo.moe/media/551684fa-8bbb-4c46-abd5-d320a26fc214",
  },
  {
    title: "BLACK CLOVER",
    logo: "./logos/black.avif",
    rating: "12", genres: "Ação, Fantasia, Magia",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/black1.jpeg","./imagens/black.jpeg"],
    linkAssistir: "https://animesdigital.org/video/a/5178b001",
    linkManga: "https://taiyo.moe/media/88343f99-c1c1-4813-979c-c1ec2ed4b0cf",
  },
  {
    title: "NORAGAMI",
    logo: "./logos/noragami.avif",
    rating: "14", genres: "Ação, Sobrenatural, Mitologia",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/noragami.jpeg","./imagens/noragami1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/19824b0",
    linkManga: "https://taiyo.moe/media/be14ea13-f146-4f71-a49e-0fd837184a7e",
  },
  {
    title: "CHAINSAW MAN",
    logo: "./logos/chainsaw.avif",
    logoWidth: "550px", logoHeight: "550px",
    rating: "18", genres: "Ação, Horror, Sobrenatural",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/chainsaw.jpg","./imagens/chainsaw1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/65076b0",
    linkManga: "https://taiyo.moe/media/78f63e91-aaae-4efb-99f8-05c2f3b59103",
  },
  {
    title: "BLUE LOCK",
    logo: "./logos/blue.avif",
    logoWidth: "550px", logoHeight: "550px",
    rating: "12", genres: "Esporte, Ação, Rivalidade",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/blue.jpeg","./imagens/blue1.jpeg"],
    linkAssistir: "https://animesdigital.org/video/a/64535/",
    linkManga: "https://taiyo.moe/media/72662e4f-e90b-4e75-be1c-dcb78a33660f",
  },
  {
    title: "DEATH NOTE",
    logo: "./logos/death.webp",
    logoWidth: "550px", logoHeight: "550px",
    rating: "14", genres: "Suspense, Sobrenatural, Psicológico",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/death.jpeg","./imagens/death1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/23722/",
    linkManga: "https://mangalivre.blog/manga/death-note/",
  },
  {
    title: "GACHIAKUTA",
    logo: "./logos/gachiakuta.avif",
    logoWidth: "550px", logoHeight: "550px",
    rating: "16", genres: "Ação, Fantasia, Aventura",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/gachiakuta.jpeg","./imagens/gachiakuta1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/130583x002",
    linkManga: "https://taiyo.moe/media/71b8e5b4-8383-4db4-9862-6a2a0a9ad397",
  },
  {
    title: "WITCH HAT ATELIER",
    logo: "./logos/witch.avif",
    rating: "10", genres: "Fantasia, Magia, Aventura",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/witch.jpeg","./imagens/witch1.jpg"],
    linkAssistir: "https://sushianimes.com.br/anime/witch-hat-atelier-dublado-979-1-season-1-episode",
    linkManga: "https://taiyo.moe/media/debb56b6-c7b5-4f9a-8a57-b23f2690f2a4",
  },
  {
    title: "SOLO LEVELING",
    logo: "./logos/solo.avif",
    logoWidth: "500px", logoHeight: "500px",
    rating: "16", genres: "Ação, Fantasia, RPG",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/solo.jpeg","./imagens/solo1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/110096z001",
    linkManga: "https://taiyo.moe/media/17b03940-450b-4b34-a904-e9b296daee9a",
  },
  {
    title: "KUROKO NO BASKET",
    logo: "./logos/kuroko.avif",
    logoWidth: "500px", logoHeight: "500px",
    rating: "10", genres: "Esporte, Escola, Rivalidade",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/kuroko.jpeg","./imagens/kuroko.png"],
    linkAssistir: "https://animesdigital.org/video/a/15689/",
    linkManga: "https://taiyo.moe/media/eb18204b-ae49-4b79-8cc8-ddcb6d0654d5",
  },
  {
    title: "MOB",
    logo: "./logos/mob.avif",
    rating: "12", genres: "Ação, Comédia, Sobrenatural",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/mob.jpg","./imagens/mob1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/100070/",
    linkManga: "https://taiyo.moe/media/28113729-7947-4999-a7a1-379c4e2a4472",
  },
  {
    title: "VINLAND SAGA",
    logo: "./logos/vinland.avif",
    rating: "17", genres: "Ação, Histórico, Drama",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/vinland.jpeg","./imagens/vinland1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/38913/",
    linkManga: "https://taiyo.moe/media/c28bdb17-d560-44ab-9ddd-b0085aa5bdb1",
  },
  {
    title: "TOKYO GHOUL",
    logo: "./logos/tokyo.avif",
    logoWidth: "600px", logoHeight: "600px",
    rating: "17", genres: "Ação, Horror, Sobrenatural",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/tokyo.jpg","./imagens/tokyre1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/37195b",
    linkManga: "https://taiyo.moe/media/d0af12ba-a251-4080-aefc-5e9c4d0ca174",
  },
  {
    title: "BUNGO STRAY DOGS",
    logo: "./logos/bungou.avif",
    rating: "14", genres: "Ação, Mistério, Sobrenatural",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/bungou.jpeg","./imagens/bungou1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/4819b0",
    linkManga: "https://taiyo.moe/media/f2044471-38f3-42ec-bc4b-294ae9a73982",
  },
  {
    title: "ATTACK ON TITAN",
    logo: "./logos/attack.avif",
    rating: "17", genres: "Ação, Drama, Horror, Distopia",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/attack.jpeg","./imagens/attack1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/53814b0",
    linkManga: "https://taiyo.moe/media/916f78eb-d53c-4c7f-9dde-56dbe584b604",
  },
  {
    title: "DANDADAN",
    logo: "./logos/dandadan.avif",
    rating: "16", genres: "Ação, Comédia, Sobrenatural",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/dandadan.jpeg","./imagens/dandadan1.webp"],
    linkAssistir: "https://animesdigital.org/video/a/123425/",
    linkManga: "https://taiyo.moe/media/d48669dd-819e-4c8d-b95d-35df607ac419",
  },
  {
    title: "SOUL EATER",
    logo: "./logos/soul.avif",
    rating: "14", genres: "Ação, Fantasia, Comédia",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/soul.jpeg","./imagens/soul1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/26462/",
    linkManga: "https://mangalivre.blog/manga/soul-eater/",
  },
  {
    title: "JOJOS BIZARRE ADVENTURE",
    logo: "./logos/jojo.avif",
    rating: "17", genres: "Ação, Aventura, Sobrenatural",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/jojo.jpg","./imagens/jojo1.jpeg"],
    linkAssistir: "https://animesdigital.org/video/a/13641/",
    linkManga: "https://taiyo.moe/media/53caebde-9c51-4f0d-a07d-92929c8eb9a0",
  },
  {
    title: "HAIKYUU",
    logo: "./logos/haikyuu.avif",
    rating: "10", genres: "Esporte, Escola, Drama",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/haikyuu.jpeg","./imagens/haikyuu1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/129451/",
    linkManga: "https://taiyo.moe/media/6775be0d-e31d-4a6a-8fee-9c32cd10cc15",
  },
  {
    title: "KONOSUBA",
    logo: "./logos/konosuba.avif",
    rating: "14", genres: "Comédia, Fantasia, Isekai",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/konosuba.jpeg","./imagens/konosuba1.jpg"],
    linkAssistir: "https://goyabu.io/40010",
    linkManga: "https://taiyo.moe/media/efdf8b1e-3dd4-4215-be2d-9ee4bde58009",
  },
  {
    title: "DR.STONE",
    logo: "./logos/dr.avif",
    rating: "12", genres: "Aventura, Ficção Científica, Survival",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/dr.jpeg","./imagens/dr1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/9445bx0011",
    linkManga: "https://taiyo.moe/media/8f12a735-6eb1-4dd7-a6cd-d5ca90ac033f",
  },
  {
    title: "KAGUYA-SAMA LOVE IS WAR",
    logo: "./logos/kaguya.avif",
    rating: "12", genres: "Romance, Comédia, Escola",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/kaguya.jpeg","./imagens/kaguya1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/25761b00",
    linkManga: "https://taiyo.moe/media/0efc6e7d-afde-4a40-b82e-911b2d172b94",
  },
  {
    title: "HELLS PARADISE",
    logo: "./logos/hells.avif",
    rating: "17", genres: "Ação, Aventura, Sobrenatural",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens/hells.jpeg","./imagens/hells1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/69003/",
    linkManga: "https://taiyo.moe/media/08ca1b54-0dc0-431d-b033-ebdd871fbee9",
    linkMangaFisico: "https://placeholder.com/manga-fisico/hells-paradise",
    linkFigures: "https://placeholder.com/figures/hells-paradise",
    linkRoupas: "https://placeholder.com/roupas/hells-paradise",
    linkMusicas: "https://placeholder.com/musicas/hells-paradise",
  },
  {
    title: "YU YU HAKUSHO",
    logo: "./logos/yuyu.avif",
    rating: "14", genres: "Ação, Sobrenatural, Aventura",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/yuyu.webp","./imagens1/yuyu1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/48549/",
    linkManga: "https://taiyo.moe/media/893c488e-70d2-4257-9370-90ae465bb588",
    linkMangaFisico: "https://placeholder.com/manga-fisico/yu-yu-hakusho",
    linkFigures: "https://placeholder.com/figures/yu-yu-hakusho",
    linkRoupas: "https://placeholder.com/roupas/yu-yu-hakusho",
    linkMusicas: "https://placeholder.com/musicas/yu-yu-hakusho",
  },
  {
    title: "THE FRAGRANT FLOWER BLOOMS WITH DIGNITY",
    logo: "./logos/thefragment.webp",
    rating: "10", genres: "Romance, Slice of Life, Escola",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/thefrag1.jpg","./imagens1/thefrag.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/130538/",
    linkManga: "https://taiyo.moe/media/c238a3c1-f4f7-404d-90c4-224976c5c762",
    linkMangaFisico: "https://placeholder.com/manga-fisico/fragrant-flower",
    linkFigures: "https://placeholder.com/figures/fragrant-flower",
    linkRoupas: "https://placeholder.com/roupas/fragrant-flower",
    linkMusicas: "https://placeholder.com/musicas/fragrant-flower",
  },
  {
    title: "NEON GENESIS EVANGELION",
    logo: "./logos/evangelion.webp",
    rating: "14", genres: "Ação, Ficção Científica, Psicológico",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/evangelion.jpg","./imagens1/evangelion1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/101569/",
    linkManga: "https://taiyo.moe/media/df6462cb-1714-44ef-a4bb-7356adf94c8a",
    linkMangaFisico: "https://placeholder.com/manga-fisico/evangelion",
    linkFigures: "https://placeholder.com/figures/evangelion",
    linkRoupas: "https://placeholder.com/roupas/evangelion",
    linkMusicas: "https://placeholder.com/musicas/evangelion",
  },
  {
    title: "THAT TIME I GOT REINCARNATED AS A SLIME",
    logo: "./logos/slime.avif",
    rating: "12", genres: "Fantasia, Isekai, Aventura",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/slime.jpg","./imagens1/slime1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/37877b001",
    linkManga: "https://taiyo.moe/media/27da52ef-e490-4fa0-b29a-c36d7b0fbccb",
    linkMangaFisico: "https://placeholder.com/manga-fisico/slime",
    linkFigures: "https://placeholder.com/figures/slime",
    linkRoupas: "https://placeholder.com/roupas/slime",
    linkMusicas: "https://placeholder.com/musicas/slime",
  },
  {
    title: "YAMADA-KUN TO LVL 999 NO KOI WO SURU",
    logo: "./logos/yamada.avif",
    rating: "12", genres: "Romance, Comédia, Jogos",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/yamada.avif","./imagens1/yamada1.webp"],
    linkAssistir: "https://animesdigital.org/anime/a/yamada-kun-to-lv999-no-koi-wo-suru",
    linkManga: "https://taiyo.moe/media/96ebaba0-11bd-46da-a3cb-874fac3defcb",
    linkMangaFisico: "https://placeholder.com/manga-fisico/yamada",
    linkFigures: "https://placeholder.com/figures/yamada",
    linkRoupas: "https://placeholder.com/roupas/yamada",
    linkMusicas: "https://placeholder.com/musicas/yamada",
  },
  {
    title: "MISS KOBAYASHI'S DRAGON MAID",
    logo: "./logos/maid.avif",
    rating: "12", genres: "Comédia, Fantasia, Slice of Life",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/kobayashi.webp","./imagens1/kobayashi1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/15871b0",
    linkManga: "https://taiyo.moe/media/66317962-2b45-4b36-9795-4500982331c0",
    linkMangaFisico: "https://placeholder.com/manga-fisico/dragon-maid",
    linkFigures: "https://placeholder.com/figures/dragon-maid",
    linkRoupas: "https://placeholder.com/roupas/dragon-maid",
    linkMusicas: "https://placeholder.com/musicas/dragon-maid",
  },
  {
    title: "INAZUMA ELEVEN",
    logo: "./logos/inazuma.png",
    rating: "10", genres: "Esporte, Aventura, Fantasia",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/inazuma.jpeg","./imagens1/inazuma1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/75933/",
    linkManga: "https://taiyo.moe/media/04eb969a-3aeb-4822-9480-0af66d7fa3e0",
    linkMangaFisico: "https://placeholder.com/manga-fisico/inazuma-eleven",
    linkFigures: "https://placeholder.com/figures/inazuma-eleven",
    linkRoupas: "https://placeholder.com/roupas/inazuma-eleven",
    linkMusicas: "https://placeholder.com/musicas/inazuma-eleven",
  },
  {
    title: "PUELLA MAGI MADOKA MAGICA",
    logo: "./logos/madoka.png",
    rating: "14", genres: "Magia, Drama, Psicológico",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/madoka.jpg","./imagens1/madoka1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/87077/",
    linkManga: "https://taiyo.moe/media/e1f88501-a6ba-4e4e-ac98-e0054c4d0c21",
    linkMangaFisico: "https://placeholder.com/manga-fisico/madoka",
    linkFigures: "https://placeholder.com/figures/madoka",
    linkRoupas: "https://placeholder.com/roupas/madoka",
    linkMusicas: "https://placeholder.com/musicas/madoka",
  },
  {
    title: "DRAGON BALL Z",
    logo: "./logos/dragon.avif",
    rating: "12", genres: "Ação, Aventura, Fantasia",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/dragon.jpg","./imagens1/dragon2.avif"],
    linkAssistir: "https://animesdigital.org/video/a/24295b0",
    linkManga: "https://taiyo.moe/media/17059a55-1784-4de9-b2fa-d00dc0e55169",
    linkMangaFisico: "https://placeholder.com/manga-fisico/dragon-ball-z",
    linkFigures: "https://placeholder.com/figures/dragon-ball-z",
    linkRoupas: "https://placeholder.com/roupas/dragon-ball-z",
    linkMusicas: "https://placeholder.com/musicas/dragon-ball-z",
  },
  {
    title: "DRAGON BALL SUPER",
    logo: "./logos/dragonsuper.avif",
    rating: "12", genres: "Ação, Aventura, Fantasia",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/dragonsuper.jpg","./imagens1/dragonsuper1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/8909/",
    linkManga: "https://taiyo.moe/media/37f2a0bc-9c7d-4c59-a798-00771f497f9f",
    linkMangaFisico: "https://placeholder.com/manga-fisico/dragon-ball-super",
    linkFigures: "https://placeholder.com/figures/dragon-ball-super",
    linkRoupas: "https://placeholder.com/roupas/dragon-ball-super",
    linkMusicas: "https://placeholder.com/musicas/dragon-ball-super",
  },
  {
    title: "SAKAMOTO DAYS",
    logo: "./logos/sakamoto.webp",
    rating: "16", genres: "Ação, Comédia, Thriller",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/sakamoto.webp","./imagens1/sakamoto1.webp"],
    linkAssistir: "https://animesdigital.org/video/a/125690/",
    linkManga: "https://taiyo.moe/media/27df42ac-4050-4bc9-bb23-0489014fdfcb",
    linkMangaFisico: "https://placeholder.com/manga-fisico/sakamoto-days",
    linkFigures: "https://placeholder.com/figures/sakamoto-days",
    linkRoupas: "https://placeholder.com/roupas/sakamoto-days",
    linkMusicas: "https://placeholder.com/musicas/sakamoto-days",
  },
  {
    title: "FAIRY TAIL",
    logo: "./logos/fairy.avif",
    rating: "14", genres: "Ação, Fantasia, Magia",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/fairy.jpg","./imagens1/fairy1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/54506r0z",
    linkManga: "https://taiyo.moe/media/c2989a57-366c-43f6-aee9-c0bfed254586",
    linkMangaFisico: "https://placeholder.com/manga-fisico/fairy-tail",
    linkFigures: "https://placeholder.com/figures/fairy-tail",
    linkRoupas: "https://placeholder.com/roupas/fairy-tail",
    linkMusicas: "https://placeholder.com/musicas/fairy-tail",
  },
  {
    title: "FOOD WARS! SHOKUGEKI NO SOMA",
    logo: "./logos/shokugeki.webp",
    rating: "14", genres: "Culinária, Comédia, Escola",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/shoukugeki.webp","./imagens1/shoukugeki1.png"],
    linkAssistir: "https://animesdigital.org/video/a/73288/",
    linkManga: "https://taiyo.moe/media/fce0a6d5-aea4-4cdc-b33c-a8c283bffb3c",
    linkMangaFisico: "https://placeholder.com/manga-fisico/shokugeki",
    linkFigures: "https://placeholder.com/figures/shokugeki",
    linkRoupas: "https://placeholder.com/roupas/shokugeki",
    linkMusicas: "https://placeholder.com/musicas/shokugeki",
  },
  {
    title: "POKEMON XY",
    logo: "./logos/pokemon.webp",
    rating: "10", genres: "Aventura, Fantasia, Amizade",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/pokemon.jpg","./imagens1/pokemon1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/73911/",
    linkManga: "https://www.poke-blast-news.net/p/manga-pokemon.html",
    linkMangaFisico: "https://placeholder.com/manga-fisico/pokemon-xy",
    linkFigures: "https://placeholder.com/figures/pokemon-xy",
    linkRoupas: "https://placeholder.com/roupas/pokemon-xy",
    linkMusicas: "https://placeholder.com/musicas/pokemon-xy",
  },
  {
    title: "SPY X FAMILY",
    logo: "./logos/spy.avif",
    rating: "12", genres: "Ação, Comédia, Espionagem",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/spy.png","./imagens1/spy1.webp"],
    linkAssistir: "https://animesdigital.org/video/a/60819z0011",
    linkManga: "https://taiyo.moe/media/cebb4deb-1152-44b5-b6aa-c639c373b6dd",
    linkMangaFisico: "https://placeholder.com/manga-fisico/spy-x-family",
    linkFigures: "https://placeholder.com/figures/spy-x-family",
    linkRoupas: "https://placeholder.com/roupas/spy-x-family",
    linkMusicas: "https://placeholder.com/musicas/spy-x-family",
  },
  {
    title: "MONSTER",
    logo: "./logos/monster.webp",
    rating: "17", genres: "Suspense, Psicológico, Drama",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/monster1.jpg","./imagens1/monster.avif"],
    linkAssistir: "https://animesdigital.org/video/a/134861/",
    linkManga: "https://taiyo.moe/media/38bfe504-9584-4344-875f-d5dfc8704c18",
    linkMangaFisico: "https://placeholder.com/manga-fisico/monster",
    linkFigures: "https://placeholder.com/figures/monster",
    linkRoupas: "https://placeholder.com/roupas/monster",
    linkMusicas: "https://placeholder.com/musicas/monster",
  },
  {
    title: "KIMI NI TODOKE",
    logo: "./logos/kimi.webp",
    rating: "10", genres: "Romance, Slice of Life, Escola",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/kimi1.jpg","./imagens1/kimi.webp"],
    linkAssistir: "https://animesdigital.org/video/a/84759/",
    linkManga: "https://taiyo.moe/media/68807133-d427-4415-bdf2-b07bc3eb30c7",
    linkMangaFisico: "https://placeholder.com/manga-fisico/kimi-ni-todoke",
    linkFigures: "https://placeholder.com/figures/kimi-ni-todoke",
    linkRoupas: "https://placeholder.com/roupas/kimi-ni-todoke",
    linkMusicas: "https://placeholder.com/musicas/kimi-ni-todoke",
  },
  {
    title: "THE DISASTROUS LIFE OF SAIKI K.",
    logo: "./logos/saiki.webp",
    rating: "12", genres: "Comédia, Sobrenatural, Escola",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/saiki.webp","./imagens1/saiki1.jpg"],
    linkAssistir: "https://animesonlinecc.to/episodio/saiki-kusuo-no-psi-nan-episodio-1/",
    linkManga: "https://taiyo.moe/media/ef06c675-1be7-462c-905f-3c126deaf44a",
    linkMangaFisico: "https://placeholder.com/manga-fisico/saiki",
    linkFigures: "https://placeholder.com/figures/saiki",
    linkRoupas: "https://placeholder.com/roupas/saiki",
    linkMusicas: "https://placeholder.com/musicas/saiki",
  },
  {
    title: "ASSASSINATION CLASSROOM",
    logo: "./logos/assasination.avif",
    rating: "12", genres: "Ação, Comédia, Escola",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/assasination.jpg","./imagens1/assasination1.webp"],
    linkAssistir: "https://animesdigital.org/video/a/1596b",
    linkManga: "https://taiyo.moe/media/b86afbfa-dc39-4516-9d01-6b8d77ad84b2",
    linkMangaFisico: "https://placeholder.com/manga-fisico/assassination-classroom",
    linkFigures: "https://placeholder.com/figures/assassination-classroom",
    linkRoupas: "https://placeholder.com/roupas/assassination-classroom",
    linkMusicas: "https://placeholder.com/musicas/assassination-classroom",
  },
  {
    title: "MY DRESS-UP DARLING",
    logo: "./logos/mydress.avif",
    rating: "16", genres: "Romance, Comédia, Cosplay",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/mydress.jpg","./imagens1/mydress2.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/54804/",
    linkManga: "https://taiyo.moe/media/e5513b1e-e6e9-40f3-a094-3d1979ec58bb",
    linkMangaFisico: "https://placeholder.com/manga-fisico/dress-up-darling",
    linkFigures: "https://placeholder.com/figures/dress-up-darling",
    linkRoupas: "https://placeholder.com/roupas/dress-up-darling",
    linkMusicas: "https://placeholder.com/musicas/dress-up-darling",
  },
  {
    title: "TOKYO REVENGERS",
    logo: "./logos/tokyorevengers.webp",
    rating: "16", genres: "Ação, Drama, Viagem no Tempo",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/tokyore.jpeg","./imagens1/tokyre1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/36897/",
    linkManga: "https://taiyo.moe/media/a54f3848-afc6-485a-91f6-b9f3595bfc58",
    linkMangaFisico: "https://placeholder.com/manga-fisico/tokyo-revengers",
    linkFigures: "https://placeholder.com/figures/tokyo-revengers",
    linkRoupas: "https://placeholder.com/roupas/tokyo-revengers",
    linkMusicas: "https://placeholder.com/musicas/tokyo-revengers",
  },
  {
    title: "SAILOR MOON",
    logo: "./logos/sailor.webp",
    rating: "10", genres: "Magia, Romance, Aventura",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/sailor.jpg","./imagens1/sailor2.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/14801/",
    linkManga: "https://taiyo.moe/media/437a5f7b-1bfe-4308-81bd-b18408300897",
    linkMangaFisico: "https://placeholder.com/manga-fisico/sailor-moon",
    linkFigures: "https://placeholder.com/figures/sailor-moon",
    linkRoupas: "https://placeholder.com/roupas/sailor-moon",
    linkMusicas: "https://placeholder.com/musicas/sailor-moon",
  },
  {
    title: "NANATSU NO TAIZAI",
    logo: "./logos/nanatsu.png",
    rating: "16", genres: "Ação, Fantasia, Aventura",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/nanatsu.jpg","./imagens1/nanatsu1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/103661/",
    linkManga: "https://mangalivre.blog/manga/nanatsu-no-taizai/",
    linkMangaFisico: "https://placeholder.com/manga-fisico/nanatsu-no-taizai",
    linkFigures: "https://placeholder.com/figures/nanatsu-no-taizai",
    linkRoupas: "https://placeholder.com/roupas/nanatsu-no-taizai",
    linkMusicas: "https://placeholder.com/musicas/nanatsu-no-taizai",
  },
  {
    title: "MAGI: THE LABYRINTH OF MAGIC",
    logo: "./logos/magi.webp",
    rating: "12", genres: "Ação, Fantasia, Aventura",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/magi.webp","./imagens1/magi1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/17865/",
    linkManga: "https://magimanga.net",
    linkMangaFisico: "https://placeholder.com/manga-fisico/magi",
    linkFigures: "https://placeholder.com/figures/magi",
    linkRoupas: "https://placeholder.com/roupas/magi",
    linkMusicas: "https://placeholder.com/musicas/magi",
  },
  {
    title: "ONE PUNCH MAN",
    logo: "./logos/onepunch.webp",
    rating: "14", genres: "Ação, Comédia, Super-herói",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/one.jpg","./imagens1/one1.webp"],
    linkAssistir: "https://animesdigital.org/video/a/19967/",
    linkManga: "https://taiyo.moe/media/7e470a84-30a7-4555-a78d-62a8c74ee57a",
    linkMangaFisico: "https://placeholder.com/manga-fisico/one-punch-man",
    linkFigures: "https://placeholder.com/figures/one-punch-man",
    linkRoupas: "https://placeholder.com/roupas/one-punch-man",
    linkMusicas: "https://placeholder.com/musicas/one-punch-man",
  },
  {
    title: "KOMI CAN'T COMMUNICATE",
    logo: "./logos/komi.webp",
    rating: "10", genres: "Comédia, Romance, Escola",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/komi1.jpg","./imagens1/komi.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/39857/",
    linkManga: "https://taiyo.moe/media/d5fdd2f2-b51d-49c0-aa0e-964afa828fbb",
    linkMangaFisico: "https://placeholder.com/manga-fisico/komi-san",
    linkFigures: "https://placeholder.com/figures/komi-san",
    linkRoupas: "https://placeholder.com/roupas/komi-san",
    linkMusicas: "https://placeholder.com/musicas/komi-san",
  },
  {
    title: "DORORO",
    logo: "./logos/dororo.png",
    rating: "16", genres: "Ação, Histórico, Sobrenatural",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/dororoo.jpg","./imagens1/dororo1.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/9116/",
    linkManga: "https://taiyo.moe/media/9f7e00b6-b62b-445f-9f86-9a40de1e8c3c",
    linkMangaFisico: "https://placeholder.com/manga-fisico/dororo",
    linkFigures: "https://placeholder.com/figures/dororo",
    linkRoupas: "https://placeholder.com/roupas/dororo",
    linkMusicas: "https://placeholder.com/musicas/dororo",
  },
  {
    title: "SK8 THE INFINITY",
    logo: "./logos/sk8.avif",
    rating: "12", genres: "Esporte, Aventura, Amizade",
    desc: "Achamos que você vai gostar", ep: "1", color: "#22a708",
    bg: ["./imagens1/sk8.jpg","./imagens1/sk81.jpg"],
    linkAssistir: "https://animesdigital.org/video/a/12345/",
    linkManga: "https://taiyo.moe/media/7115093b-bd6b-411a-8c7b-d22b1f34080a",
    linkMangaFisico: "https://placeholder.com/manga-fisico/sk8",
    linkFigures: "https://placeholder.com/figures/sk8",
    linkRoupas: "https://placeholder.com/roupas/sk8",
    linkMusicas: "https://placeholder.com/musicas/sk8",
  },
];

// Caminho da imagem da estrela usada nos dots de navegação
const STAR_IMG_SRC = "./imagens/estrela.png";

const AUTO_INTERVAL = 8000, BG_INTERVAL = 4000, SLIDE_DURATION = 700;
let currentIndex = 0, isTransitioning = false;
let bgSlidesA = [], bgSlidesB = [], bgSlidesC = [];
let bgIndexA = 0, bgIndexB = 0, bgIndexC = 0;
let bgTimerA = null, autoTimer = null;

const crStage = document.getElementById('crStage');
const imgWrapA = document.getElementById('imgWrapA');
const imgWrapB = document.getElementById('imgWrapB');
const imgWrapC = document.getElementById('imgWrapC');

const logoWrapA = document.getElementById('logoWrapA'), logoImgA = document.getElementById('logoImgA');
const ratingA = document.getElementById('ratingA'), genresA = document.getElementById('genresA');
const descA = document.getElementById('descA'), btnsA = document.getElementById('btnsA');
const playLabelA = document.getElementById('playLabelA'), metaWrapA = document.getElementById('metaWrapA');
const btnPlayA = document.getElementById('btnPlayA'), btnSaveA = document.getElementById('btnSaveA');

const logoWrapB = document.getElementById('logoWrapB'), logoImgB = document.getElementById('logoImgB');
const ratingB = document.getElementById('ratingB'), genresB = document.getElementById('genresB');
const descB = document.getElementById('descB'), btnsB = document.getElementById('btnsB');
const playLabelB = document.getElementById('playLabelB'), metaWrapB = document.getElementById('metaWrapB');
const btnPlayB = document.getElementById('btnPlayB'), btnSaveB = document.getElementById('btnSaveB');

const logoWrapC = document.getElementById('logoWrapC'), logoImgC = document.getElementById('logoImgC');
const ratingC = document.getElementById('ratingC'), genresC = document.getElementById('genresC');
const descC = document.getElementById('descC'), btnsC = document.getElementById('btnsC');
const playLabelC = document.getElementById('playLabelC'), metaWrapC = document.getElementById('metaWrapC');
const btnPlayC = document.getElementById('btnPlayC'), btnSaveC = document.getElementById('btnSaveC');

const dotsWrap = document.getElementById('dotsWrap');
const progressBar = document.getElementById('progressBar');
const particlesContainer = document.getElementById('particlesContainer');

const CONTENT_A = [logoWrapA, metaWrapA, descA, btnsA];
const CONTENT_B = [logoWrapB, metaWrapB, descB, btnsB];
const CONTENT_C = [logoWrapC, metaWrapC, descC, btnsC];

// Função única e correta — preenche logo, meta, links
function populatePanel(anime, ids) {
  ids.logoImg.src = anime.logo;
  ids.logoImg.alt = anime.title;
  // Sempre reseta primeiro, depois aplica o tamanho correto
  ids.logoImg.style.maxWidth  = anime.logoWidth  || '550px';
  ids.logoImg.style.maxHeight = anime.logoHeight || '550px';
  ids.rating.textContent = anime.rating;
  ids.genres.textContent = anime.genres;
  ids.desc.textContent = anime.desc;
  ids.playLabel.textContent = 'COMEÇAR A ASSISTIR E' + anime.ep;
  ids.btnPlay.href = anime.linkAssistir || '#';
  ids.btnSave.href = anime.linkManga || '#';
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
    div.style.willChange = 'opacity';
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

function buildDots() {
  dotsWrap.innerHTML = '';

  let globalTooltip = document.getElementById('cr-global-tooltip');
  if (!globalTooltip) {
    globalTooltip = document.createElement('div');
    globalTooltip.id = 'cr-global-tooltip';
    document.body.appendChild(globalTooltip);
  }

  ANIMES.forEach((anime, i) => {
    const btn = document.createElement('button');
    btn.className = 'cr-dot-btn' + (i === 0 ? ' active' : '');
    btn.setAttribute('aria-label', 'Ir para ' + anime.title);

    const img = document.createElement('img');
    img.className = 'cr-star-img';
    img.src = STAR_IMG_SRC;
    img.alt = '';
    img.draggable = false;
    btn.appendChild(img);

    btn.addEventListener('mouseenter', () => {
      const rect = btn.getBoundingClientRect();
      globalTooltip.textContent = anime.title;
      globalTooltip.style.left = (rect.left + rect.width / 2) + 'px';
      globalTooltip.style.top = (rect.top - 12) + 'px';
      globalTooltip.classList.add('visible');
    });

    btn.addEventListener('mouseleave', () => {
      globalTooltip.classList.remove('visible');
    });

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
  // Scroll active dot into view
  const activeBtn = dotsWrap.querySelector('.cr-dot-btn.active');
  if (activeBtn) {
    activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
  updateDotsArrows();
}

function updateDotsArrows() {
  const arrowLeft  = document.getElementById('dotsArrowLeft');
  const arrowRight = document.getElementById('dotsArrowRight');
  if (!arrowLeft || !arrowRight) return;
  const scrollLeft = dotsWrap.scrollLeft;
  const maxScroll  = dotsWrap.scrollWidth - dotsWrap.clientWidth;
  // Seta esquerda: some so quando nao ha nada mais para a esquerda
  arrowLeft.classList.toggle('hidden',  scrollLeft <= 2);
  // Seta direita: some so quando nao ha nada mais para a direita
  arrowRight.classList.toggle('hidden', maxScroll <= 2 || scrollLeft >= maxScroll - 2);
}

(function initDotsArrows() {
  const arrowLeft  = document.getElementById('dotsArrowLeft');
  const arrowRight = document.getElementById('dotsArrowRight');
  if (!arrowLeft || !arrowRight) return;
  arrowLeft.addEventListener('click', () => {
    dotsWrap.scrollBy({ left: -100, behavior: 'smooth' });
    setTimeout(updateDotsArrows, 350);
  });
  arrowRight.addEventListener('click', () => {
    dotsWrap.scrollBy({ left: 100, behavior: 'smooth' });
    setTimeout(updateDotsArrows, 350);
  });
  dotsWrap.addEventListener('scroll', updateDotsArrows, { passive: true });
  window.addEventListener('resize', updateDotsArrows);
  // Inicializa estado das setas apos renderizar
  setTimeout(updateDotsArrows, 200);
})();

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
    populatePanel(targetAnime, { logoImg: logoImgB, rating: ratingB, genres: genresB, desc: descB, playLabel: playLabelB, btnPlay: btnPlayB, btnSave: btnSaveB });
    bgSlidesB = buildBg(imgWrapB, targetAnime); bgIndexB = 0;
    hideContent(CONTENT_B);
    crStage.classList.remove('sliding-left', 'sliding-right');
    crStage.style.transform = 'translateX(-33.333%)';
    void crStage.offsetWidth;
    crStage.classList.add('sliding-left');
    crStage.style.transform = 'translateX(-66.666%)';
    setTimeout(() => showContent(CONTENT_B), SLIDE_DURATION * 0.3);
    setTimeout(() => {
      populatePanel(targetAnime, { logoImg: logoImgA, rating: ratingA, genres: genresA, desc: descA, playLabel: playLabelA, btnPlay: btnPlayA, btnSave: btnSaveA });
      bgSlidesA = buildBg(imgWrapA, targetAnime); bgIndexA = 0;
      showContent(CONTENT_A); hideContent(CONTENT_B);
      crStage.classList.remove('sliding-left', 'sliding-right');
      crStage.style.transform = 'translateX(-33.333%)';
      finishTransition(idx);
    }, SLIDE_DURATION + 20);
  } else {
    populatePanel(targetAnime, { logoImg: logoImgC, rating: ratingC, genres: genresC, desc: descC, playLabel: playLabelC, btnPlay: btnPlayC, btnSave: btnSaveC });
    bgSlidesC = buildBg(imgWrapC, targetAnime); bgIndexC = 0;
    hideContent(CONTENT_C);
    crStage.classList.remove('sliding-left', 'sliding-right');
    crStage.style.transform = 'translateX(-33.333%)';
    void crStage.offsetWidth;
    crStage.classList.add('sliding-right');
    crStage.style.transform = 'translateX(0%)';
    setTimeout(() => showContent(CONTENT_C), SLIDE_DURATION * 0.3);
    setTimeout(() => {
      populatePanel(targetAnime, { logoImg: logoImgA, rating: ratingA, genres: genresA, desc: descA, playLabel: playLabelA, btnPlay: btnPlayA, btnSave: btnSaveA });
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
  if (typeof window._updateCartLinks === 'function') window._updateCartLinks();
  bgTimerA = setInterval(() => {
    if (bgSlidesA.length < 2) return;
    bgSlidesA[bgIndexA].classList.remove('active');
    bgIndexA = (bgIndexA + 1) % bgSlidesA.length;
    bgSlidesA[bgIndexA].classList.add('active');
  }, BG_INTERVAL);
  startProgress();
  const nextIdx = (currentIndex + 1) % ANIMES.length;
  autoTimer = setTimeout(() => goTo(nextIdx, 'left'), AUTO_INTERVAL);
  // Precarrega o próximo anime em background
  setTimeout(() => preloadAnimeImages(nextIdx), 300);
}

function init() {
  const anime = ANIMES[0];
  populatePanel(anime, { logoImg: logoImgA, rating: ratingA, genres: genresA, desc: descA, playLabel: playLabelA, btnPlay: btnPlayA, btnSave: btnSaveA });
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

// ── PRELOAD das próximas imagens (carrega em background sem bloquear) ──
function preloadAnimeImages(idx) {
  const anime = ANIMES[idx];
  if (!anime) return;
  anime.bg.forEach(url => {
    const img = new Image();
    img.src = url;
  });
  const logo = new Image();
  logo.src = anime.logo;
}

init();

// Precarrega os próximos 2 animes logo após iniciar
setTimeout(() => { preloadAnimeImages(1); preloadAnimeImages(2); }, 800);

let touchStartX = 0, touchStartY = 0;
document.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', (e) => {
  if (isTransitioning) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  // Só registra swipe horizontal (pelo menos 50px, e mais horizontal que vertical)
  if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;
  if (dx < 0) {
    // Swipe para esquerda → próximo anime
    const nextIdx = (currentIndex + 1) % ANIMES.length;
    goTo(nextIdx, 'left');
    preloadAnimeImages((nextIdx + 1) % ANIMES.length);
  } else {
    // Swipe para direita → anime anterior
    const prevIdx = (currentIndex - 1 + ANIMES.length) % ANIMES.length;
    goTo(prevIdx, 'right');
    preloadAnimeImages((prevIdx - 1 + ANIMES.length) % ANIMES.length);
  }
}, { passive: true });

// Navegação pelo teclado
document.addEventListener('keydown', (e) => {
  if (isTransitioning) return;
  if (e.key === 'ArrowLeft') {
    const prevIdx = (currentIndex - 1 + ANIMES.length) % ANIMES.length;
    goTo(prevIdx, 'right');
  }
  if (e.key === 'ArrowRight') {
    const nextIdx = (currentIndex + 1) % ANIMES.length;
    goTo(nextIdx, 'left');
  }
});

// ── BUSCA ──
(function() {
  const searchWrap    = document.getElementById('searchWrap');
  const searchToggle  = document.getElementById('searchToggle');
  const searchBox     = document.getElementById('searchBox');
  const searchInput   = document.getElementById('searchInput');
  const searchClear   = document.getElementById('searchClear');
  const searchResults = document.getElementById('searchResults');

  let searchOpen = false;

  function openSearch() {
    searchOpen = true;
    searchBox.classList.add('open');
    searchResults.classList.remove('open');
    setTimeout(() => searchInput.focus(), 50);
  }

  function closeSearch() {
    searchOpen = false;
    searchBox.classList.remove('open');
    searchResults.classList.remove('open');
    searchInput.value = '';
    searchClear.classList.remove('visible');
  }

  searchToggle.addEventListener('click', () => {
    if (searchOpen) closeSearch();
    else openSearch();
  });

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    searchClear.classList.toggle('visible', q.length > 0);
    if (!q) { searchResults.classList.remove('open'); searchResults.innerHTML = ''; return; }

    const matches = ANIMES.filter(a =>
      a.title.toLowerCase().includes(q) ||
      (a.genres && a.genres.toLowerCase().includes(q))
    );

    if (matches.length === 0) {
      searchResults.innerHTML = '<div class="cr-search-no-results">Nenhum anime encontrado</div>';
    } else {
      searchResults.innerHTML = matches.map((a, _) => {
        const idx = ANIMES.indexOf(a);
        return `<div class="cr-search-item" data-idx="${idx}">
          <div>
            <div class="cr-search-item-title">${a.title}</div>
            <div class="cr-search-item-genres">${a.genres}</div>
          </div>
        </div>`;
      }).join('');
      searchResults.querySelectorAll('.cr-search-item').forEach(item => {
        item.addEventListener('click', () => {
          const idx = parseInt(item.dataset.idx);
          const direction = idx >= currentIndex ? 'left' : 'right';
          closeSearch();
          if (idx !== currentIndex) goTo(idx, direction);
        });
      });
    }
    searchResults.classList.add('open');
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchClear.classList.remove('visible');
    searchResults.classList.remove('open');
    searchResults.innerHTML = '';
    searchInput.focus();
  });

  // Fechar ao clicar fora
  document.addEventListener('click', (e) => {
    if (!searchWrap.contains(e.target)) closeSearch();
  });

  // Fechar com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOpen) closeSearch();
  });
})();
// ── CARRINHO DINÂMICO ──
(function() {
  const cartWrap   = document.getElementById('cartWrap');
  if (!cartWrap) return;
  const cartToggle = document.getElementById('cartToggle');
  const btnManga   = document.getElementById('cartBtnManga');
  const btnFigures = document.getElementById('cartBtnFigures');
  const btnRoupas  = document.getElementById('cartBtnRoupas');
  const btnMusicas = document.getElementById('cartBtnMusicas');
  const subBtns    = cartWrap.querySelectorAll('.cr-cart-sub-btn');
  const tooltip    = document.getElementById('cr-global-tooltip');

  let cartOpen = false;

  function updateCartLinks() {
    const anime = ANIMES[currentIndex];
    if (!anime) return;
    btnManga.href   = anime.linkMangaFisico || '#';
    btnFigures.href = anime.linkFigures     || '#';
    btnRoupas.href  = anime.linkRoupas      || '#';
    btnMusicas.href = anime.linkMusicas     || '#';
  }
  window._updateCartLinks = updateCartLinks;

  function openCart() {
    cartOpen = true;
    cartWrap.classList.add('open');
    cartToggle.classList.add('active');
    updateCartLinks();
  }
  function closeCart() {
    cartOpen = false;
    cartWrap.classList.remove('open');
    cartToggle.classList.remove('active');
    if (tooltip) tooltip.classList.remove('visible');
  }

  cartToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    cartOpen ? closeCart() : openCart();
  });

  subBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      if (!tooltip) return;
      tooltip.textContent = btn.dataset.tooltip || '';
      const r = btn.getBoundingClientRect();
      tooltip.style.left = (r.left + r.width / 2) + 'px';
      tooltip.style.top  = (r.top - 8) + 'px';
      tooltip.classList.add('visible');
    });
    btn.addEventListener('mouseleave', () => {
      if (tooltip) tooltip.classList.remove('visible');
    });
  });

  document.addEventListener('click', (e) => {
    if (!cartWrap.contains(e.target)) closeCart();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartOpen) closeCart();
  });

  updateCartLinks();
})();