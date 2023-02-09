const album = {
  cover: "https://i.scdn.co/image/ab67616d0000b273825efcb1ce20bcd1a30ffabc",
  artist: "Rodrigo Zin",
  name: "Grana Azul",
  link: "https://www.youtube.com/watch?v=takyYZ3W7T0&ab_channel=RodrigoZin"
};

function sendToYoutube() {
  window.location.href = album.link
}

function setImageBackground() {
  const image = document.images['image--background'];
  image.src = album.cover;
}

function setAlbumInfoToCover() {
  const imageElement = document.images.cover;
  imageElement.src = album.cover;
  imageElement.alt = album.name;

  const title = document.querySelector("#album-name");
  title.innerText = album.name;

  const artist = document.querySelector("#artist");
  artist.innerText = album.artist;
}

document.addEventListener("DOMContentLoaded", (event) => {
  const youtubeButton = document.getElementById("youtube")
  youtubeButton.onclick = sendToYoutube;
  setImageBackground();
  setAlbumInfoToCover();
});


document.removeEventListener("DOMContentLoaded");
