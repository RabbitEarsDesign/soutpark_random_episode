const randomButton = document.getElementById("randomButton");
const title = document.getElementById("title");
const season = document.getElementById("season");
const episode = document.getElementById("episode");
const release = document.getElementById("release");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function getEpisode() {
  const num = getRandomNumber(1, 309);
  const res = await fetch(`https://spapi.dev/api/episodes/${num}`);
  const { data } = await res.json();

  const date = new Date(data.air_date).toDateString();

  title.innerText = data.name;
  season.innerText = data.season;
  episode.innerText = data.episode;
  release.innerText = date;
}

randomButton.addEventListener("click", getEpisode);

getEpisode();
