const playlist = document.querySelectorAll(".videoSrc");
console.log("okk");

playlist.forEach(liSrc => {
  liSrc.onclick = function(e) {
    let videoSrc = this.getAttribute("data-href");
    console.log(videoSrc);
    video.src = videoSrc;
    video.setAttribute("data-name", videoSrc);
    registrazioneAudio = undefined;
  };
});
