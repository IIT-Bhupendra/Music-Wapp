var SongsSrc = [
  "Music/01%20-%20Tum%20Hi%20Ho%20-%20DownloadMing.SE.mp3",
  "Music/02%20-%20Sunn%20Raha%20Hai%20-%20DownloadMing.SE.mp3",
  "Music/03%20Mera%20Pyar%20Tera%20Pyar%20-%20Jalebi.mp3",
  "Music/03_Behti_Hawa_Sa_Tha_Woh_-(Pagalworld.com).mp3",
  "Music/04_Give_Me_Some_Sunshine_-(Pagalworld.com).mp3",
  "Music/05%20-%20Mera%20Intkam%20Dekhegi%20(SongsMp3.Com).mp3",
  "Music/06%20-%20Piya%20Aaye%20Na%20-%20DownloadMing.SE.mp3",
  "Music/10%20-%20Milne%20Hai%20Mujhse%20Aayi%20-%20DownloadMing.SE.mp3",
  "Music/11-Baarish%20-%20Half%20Girlfriend%20(Ash%20King)%20320Kbps.mp3",
  "Music/12-baby%20ko%20bass%20pasand%20h.mp3",
  "Music/13-Ghar%20Se%20Nikalte%20Hi%20-%20Armaan%20Malik-(Mr-Song.Com).mp3",
  "Music/14-Jaane%20Nahin%20Denge-(PagalWorld.com).mp3",
  "Music/15-Lo%20Maan%20Liya%20(SongsMp3.Com).mp3",
  "Music/16-Namo-Namo-Kedarnath.mp3",
  "Music/17-Oh%20Humsafar%20-%20Neha%20Kakkar-(Mr-Song.Com).mp3",
];
// var i;
// function playPause(i){

// }

// $(document).ready(function(){
//     $(".fas fa-stop-circle").hide();
//     /*$('songs-list ul li').mouseenter(function(){
//         $("")
//     });*/
// });

// const music = document.querySelector(".audio_tag audio");
// const play = document.getElementById("m1");
// const play = document.querySelectorAll(".song_class");
// let isPlaying = false;

// const playMusic = () => {
//   isPlaying = true;
//   music.play();
//   play.classList.replace("fa-play-circle", "fa-pause-circle");
// };

// const pauseMusic = () => {
//   isPlaying = false;
//   music.pause();
//   play.classList.replace("fa-pause-circle", "fa-play-circle");
// };

// play.addEventListener("click", (e) => {
//   music.src = e.data;
//   isPlaying ? pauseMusic() : playMusic();
// });

audio_player();
function audio_player() {
  $("#audio_player")[0].src = $("#play_list li a")[0];
  $("#audio_player")[0].play();
  $("#play_list li a").click(function (e) {
    // e.preventDefault();
    $("#audio_player")[0].src = this;
  });
}
