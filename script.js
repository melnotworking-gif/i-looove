const startPage = document.getElementById("start-page");
const menuPage = document.getElementById("menu-page");
const startBtn = document.getElementById("start-btn");

const letterPage = document.getElementById("letter-page");
const songsPage = document.getElementById("songs-page");
const idkPage = document.getElementById("idk-page");

const letterBtn = document.getElementById("letter-btn");
const closeBtns = document.querySelectorAll(".close-btn");

const songsBtn = document.getElementById("songs-btn");
const idkBtn = document.getElementById("idk-btn");
const sound = document.getElementById("angry-sound");

const exitBtn = document.getElementById("exit-btn");

startBtn.addEventListener("click", () => {
  startPage.classList.remove("active");
  menuPage.classList.add("active");
});

letterBtn.addEventListener("click", () => {
  letterPage.classList.add("active");
});

songsBtn.addEventListener("click", () => {
  songsPage.classList.add("active");
});

idkBtn.addEventListener("click", () => {
  idkPage.classList.add("active");
  sound.play();
});

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    letterPage.classList.remove("active");
    songsPage.classList.remove("active");
    idkPage.classList.remove("active");
  });
});

exitBtn.addEventListener("click", () => {
  menuPage.classList.remove("active");
  startPage.classList.add("active");
});

const songs = [
  "En Un Sólo Dia - Morat",
  "Besame Mucho - Lisa Ono",
  "Nothing - Bruno Major",
  "(They Long To Be) Close To You - Carpenters",
  "Can't Help Falling In Love - Elvis Presley",
  "Best Part (feat. H.E.R.) - Daniel Caesar",
  "Get You (feat. Kali Uchis)- Daniel Caesar",
  "UNDERSTAND - keshi",
  "(Only) About Love (Demo) - grentperez",
  "My Heart It Beats for You - grentperez",
  "Right Side of My Neck - Faye Webster",
  "Loving is Easy - Rex Orange County",
  "love - Wave to earth",
  "Labios Rotos - Zoé",
  "Beso - Jósean Log",
];

const songName = document.getElementById("song-name");
const randomIndex = Math.floor(Math.random() * songs.length);
songName.textContent = songs[randomIndex];
