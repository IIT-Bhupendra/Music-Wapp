var songsData = [
  {
    image: "./Images/Tum Hi Ho.jpg",
    src: "./Music/01 - Tum Hi Ho - DownloadMing.SE.mp3",
    title: "Tum Hi Ho",
    singer: "Arijit Singh",
    movie: "Aashiqui 2",
    timestamp: "00:04:22",
  },
  {
    image: "./Images/Sunn Raha ha na.jpg",
    src: "./Music/02 - Sunn Raha Hai - DownloadMing.SE.mp3",
    title: "Sunn Raha Hai",
    singer: "Raxter and Shreya Goshal",
    movie: "Aashiqui 2",
    timestamp: "00:06:30",
  },
  {
    image: "./Images/Mera pyar tera pyar.jpg",
    src: "./Music/03 Mera Pyar Tera Pyar - Jalebi.mp3",
    title: "Mera Pyar Tera Pyar",
    singer: "Arijit Singh and Jeet Gangully",
    movie: "Jalebi",
    timestamp: "00:04:35",
  },
  {
    image: "./Images/Behti hawa sa tha wo.jpg",
    src: "./Music/03_Behti_Hawa_Sa_Tha_Woh_-(Pagalworld.com).mp3",
    title: "Behti Hawa Sa Tha Woh",
    singer: "Shaan and Shantanu Moitra",
    movie: "3 Idiots",
    timestamp: "00:05:01",
  },
  {
    image: "./Images/Give me some shine.jpeg",
    src: "./Music/04_Give_Me_Some_Sunshine_-(Pagalworld.com).mp3",
    title: "Give Me Some Sunshine",
    singer: "Sharman Joshi and Suraj Jagan",
    movie: "3 Idiots",
    timestamp: "00:04:07",
  },
  {
    image: "./Images/Mera intkaam.jpg",
    src: "./Music/05 - Mera Intkam Dekhegi (SongsMp3.Com).mp3",
    title: "Mera Intkam Dekhegi",
    singer: "Krishna Beuraa",
    movie: "Shaadi Me Jaroor Aana",
    timestamp: "00:03:00",
  },
  {
    image: "./Images/Piya aaye na.jpg",
    src: "./Music/06 - Piya Aaye Na - DownloadMing.SE.mp3",
    title: "Piya Aaye Na",
    singer: "KK and Tulsi Kumar",
    movie: "Aashiqui 2",
    timestamp: "00:04:46",
  },
  {
    image: "./Images/Milne Hai Mujse Aayi.jpg",
    src: "./Music/10 - Milne Hai Mujhse Aayi - DownloadMing.SE.mp3",
    title: "Milne Hai Mujhse Aayi",
    singer: "Arijit Singh",
    movie: "Aashiqui 2",
    timestamp: "00:04:56",
  },
  {
    image: "./Images/Baarish.jpg",
    src: "./Music/11-Baarish - Half Girlfriend (Ash King) 320Kbps.mp3",
    title: "Baarish",
    singer: "Ash King and Shashaa Tirupati",
    movie: "Half Girlfriend",
    timestamp: "00:04:35",
  },
  {
    image: "./Images/Baby ko Bass Pasand Hai.jpg",
    src: "./Music/12-baby ko bass pasand h.mp3",
    title: "Baby Ko Bass Pasand Hai",
    singer: "Shalmali Kholgade, Badshah & Vishal Dadlani",
    movie: "Sultan",
    timestamp: "00:03:34",
  },
  {
    image: "./Images/Ghar se nikalte hi.jpg",
    src: "./Music/13-Ghar Se Nikalte Hi - Armaan Malik-(Mr-Song.Com).mp3",
    title: "Ghar Se Nikalte Hi",
    singer: "Armaan Malik",
    movie: "Album",
    timestamp: "00:04:42",
  },
  {
    image: "./Images/Jane Nhi Denge Tujhe.jpg",
    src: "./Music/14-Jaane Nahin Denge-(PagalWorld.com).mp3",
    title: "Jaane Nahin Denge",
    singer: "Sonu Nigam",
    movie: "3 Idiots",
    timestamp: "00:00:34",
  },
  {
    image: "./Images/LoMaan Liya.jpg",
    src: "./Music/15-Lo Maan Liya (SongsMp3.Com).mp3",
    title: "Lo Maan Liya",
    singer: "Arijit Singh",
    movie: "Raaz Reboot",
    timestamp: "00:05:00",
  },
  {
    image: "./Images/Namo Namo.jpg",
    src: "./Music/16-Namo-Namo-Kedarnath.mp3",
    title: "Namo Namo Kedarnath",
    singer: "Amit Trivedi",
    movie: "Kedarnath",
    timestamp: "00:05:22",
  },
  {
    image: "./Images/Oh Humsafar.jpg",
    src: "./Music/17-Oh Humsafar - Neha Kakkar-(Mr-Song.Com).mp3",
    title: "Oh Humsafar",
    singer: "Neha Kakkar",
    movie: "Album",
    timestamp: "00:05:30",
  },
];

// Creating Inner Html for all songs list
var songsListHTML = songsData
  .map(
    (song, i) =>
      `<li class="song" onclick="changeAudioSrc(${i})" key={${i}}>
        <div class="song-title-cast">
            <span>${song.title}</span>
            <h6>${song.singer} | ${song.movie}</h6>
        </div>
        <div class="song-timestamp">
            <h4>${song.timestamp.substring(3)}</h4>
        </div>
      </li>`)
  .join("");
var songsList = document.getElementById("list-of-all-songs");
songsList.innerHTML = songsListHTML;
document.getElementById("songs-here").appendChild(songsList);

// Getting all html elements those will change with changing audioSrc
var playing = false;
var audioController = document.getElementById("audioController");
var audioTitle = document.getElementById("audioTitle");
var audioSingerMovie = document.getElementById("audioSingerMovie");
var audioBtn = document.getElementById("play-pause-btn");
var audioImage = document.getElementsByClassName("songImage");

function playPause() {
  if (playing) {
    playing = false;
    audioBtn.classList.remove("fa-pause-circle");
    audioBtn.classList.add("fa-play-circle");
  } else {
    playing = true;
    audioBtn.classList.remove("fa-play-circle");
    audioBtn.classList.add("fa-pause-circle");
  }

  playing ? audioController.play() : audioController.pause();
}

var currSongIndex = 8;
function changeAudioSrc(songIndex) {
  if (currSongIndex == parseInt(songIndex)) {
    if (playing) {
      playing = false;
      audioBtn.classList.remove("fa-pause-circle");
      audioBtn.classList.add("fa-play-circle");
    } else {
      playing = true;
      audioBtn.classList.remove("fa-play-circle");
      audioBtn.classList.add("fa-pause-circle");
    }
  } else {
    replaceAudioCadre(songIndex);
    playing = true;
    audioBtn.classList.remove("fa-play-circle");
    audioBtn.classList.add("fa-pause-circle");
  }
  playing ? audioController.play() : audioController.pause();
}

function changeToPrevAudio() {
  replaceAudioCadre((currSongIndex - 1 + 15) % 15);
}

function changeToNextAudio() {
  replaceAudioCadre((currSongIndex + 1) % 15);
}

function replaceAudioCadre(songIndex) {
  currSongIndex = songIndex;
  audioImage[0].src = songsData[songIndex].image;
  audioImage[1].src = songsData[songIndex].image;
  audioController.src = songsData[songIndex].src;
  audioTitle.innerText = songsData[songIndex].title;
  audioSingerMovie.innerText =
    songsData[songIndex].singer + " | " + songsData[songIndex].movie;
  audioController.play();
}

// for handling progress bar
var progressBar = document.getElementById("progress-bar");
var timestamp = document.getElementById("timestamp");

function updateProgress(currentTime, duration) {
  var progress = (currentTime / duration) * 100;

  var hours = Math.floor(currentTime / 3600);
  var minutes = Math.floor((currentTime % 3600) / 60);
  var seconds = Math.floor(currentTime % 60);

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  var currTime = `${hours}:${minutes}:${seconds}`;

  progressBar.style.width = `${progress}%`;
  timestamp.textContent = currTime;

  if (currentTime == duration) {
    changeToNextAudio();
  }
}

audioController.addEventListener("timeupdate", () => {
  updateProgress(audioController.currentTime, audioController.duration);
});

progressBar.parentElement.addEventListener("click", (event) => {
  var progressContainer = progressBar.parentElement;
  var clickPosition = event.clientX - progressContainer.offsetLeft;
  var progress =
    (clickPosition / progressContainer.offsetWidth) * audioController.duration;
  audioController.currentTime = progress;
  updateProgress(audioController.currentTime, audioController.duration);
});
