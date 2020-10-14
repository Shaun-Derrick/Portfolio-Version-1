jsindex  // Load the IFrame Player API code asynchronously.
setTimeout(function() {
    player.playVideo();
}, 20000);
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {    
    player = new YT.Player('ytplayer', {
      height: '1000px',
      width: '500px',
      autoplay: '1',
      mute: '1',
      videoId: 'https://www.youtube.com/embed/EPyl1LgNtoQ'
    }); 
}
