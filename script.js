// var SongsSrc = [
//   "Music/01%20-%20Tum%20Hi%20Ho%20-%20DownloadMing.SE.mp3",
//   "Music/02%20-%20Sunn%20Raha%20Hai%20-%20DownloadMing.SE.mp3",
//   "Music/03%20Mera%20Pyar%20Tera%20Pyar%20-%20Jalebi.mp3",
//   "Music/03_Behti_Hawa_Sa_Tha_Woh_-(Pagalworld.com).mp3",
//   "Music/04_Give_Me_Some_Sunshine_-(Pagalworld.com).mp3",
//   "Music/05%20-%20Mera%20Intkam%20Dekhegi%20(SongsMp3.Com).mp3",
//   "Music/06%20-%20Piya%20Aaye%20Na%20-%20DownloadMing.SE.mp3",
//   "Music/10%20-%20Milne%20Hai%20Mujhse%20Aayi%20-%20DownloadMing.SE.mp3",
//   "Music/11-Baarish%20-%20Half%20Girlfriend%20(Ash%20King)%20320Kbps.mp3",
//   "Music/12-baby%20ko%20bass%20pasand%20h.mp3",
//   "Music/13-Ghar%20Se%20Nikalte%20Hi%20-%20Armaan%20Malik-(Mr-Song.Com).mp3",
//   "Music/14-Jaane%20Nahin%20Denge-(PagalWorld.com).mp3",
//   "Music/15-Lo%20Maan%20Liya%20(SongsMp3.Com).mp3",
//   "Music/16-Namo-Namo-Kedarnath.mp3",
//   "Music/17-Oh%20Humsafar%20-%20Neha%20Kakkar-(Mr-Song.Com).mp3",
// ];

var audioController = document.getElementById('audioController');
  var audioText = document.getElementById('audio_text')
  var playing = false;
  var audioBtn = document.getElementById('play-pause-btn')
  function changeAudioSrc(newSrc, newText){
    console.log(audioBtn)
    // var playPause = this.event.target.firstElementChild.classList;
    // console.log(playPause)
    var prevSrc = audioController.src.substr(22).replaceAll('%20', ' ') 
    if(newSrc == prevSrc){
      if(playing){
        playing = false;
        audioBtn.classList.remove('fa-pause-circle')
        audioBtn.classList.add('fa-play-circle')
      } else {
        playing = true;
        audioBtn.classList.remove('fa-play-circle')
        audioBtn.classList.add('fa-pause-circle')
      }
    } else {
      audioController.src = newSrc;
      audioText.innerText = newText;
      playing = true;
      audioBtn.classList.remove('fa-play-circle')
      audioBtn.classList.add('fa-pause-circle')
    }

    playing ? audioController.play() : audioController.pause();
}
