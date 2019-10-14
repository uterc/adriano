const video = document.getElementById("video");
const playButton = document.getElementById("play");
const recButton = document.getElementById("rec");
const stopButton = document.getElementById("stop");
const saveButton = document.getElementById("save");
var registrazioneAudio;

navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
  mediaRecorderPlayer(stream);
});

function mediaRecorderPlayer(streamData) {
  inizia(streamData);
}

function inizia(streamData) {
  registratore = new MediaRecorder(streamData);

  registratore.ondataavailable = e => {
    audioChunks.push(e.data);

    if (registratore.state == "inactive") {
      let blob = new Blob(audioChunks, { type: "audio/mpeg-3" });
      registrazioneAudio = document.createElement("audio");
      registrazioneAudio.src = URL.createObjectURL(blob);
    }
  };
}

recButton.onclick = function() {
  audioChunks = [];
  registratore.start();
  video.muted = true;
  video.play();
};

stopButton.onclick = function() {
  if (registratore.state != "inactive") {
    registratore.stop();
    video.pause();
    video.currentTime = 0;
  } else if (registrazioneAudio && registratore.state == "inactive") {
    registrazioneAudio.pause();
    video.pause();
    video.currentTime = 0;
  } else {
    video.pause();
  }
};

saveButton.onclick = function() {
  if (registrazioneAudio) {
    const link = document.createElement("a"); // Or maybe get it from the current document
    link.href = registrazioneAudio.src;
    link.download = video.getAttribute("data-name") + "-" + nome + ".mp3";
    link.click();
  }
};

playButton.onclick = function() {
  if (registrazioneAudio) {
    registrazioneAudio.play();
    video.play();
  } else {
    video.muted = false;
    video.play();
  }
};
