const nomeInput = document.getElementById("nome");
const submit = document.getElementById("submit");
const overflow = document.querySelector(".overflow");
const showName = document.querySelector("#show-name");
const changeName = document.querySelector("#cambia-nome");
const reboot = document.querySelector("#riavia");
let nome = "";

submit.onclick = e => {
  nome = nomeInput.value;
  nomeInput.value = "";
  console.log(nome);
  overflow.classList.toggle("normal");
  overflow.classList.toggle("scale");
  showName.innerText = nome;
};

changeName.onclick = function(e) {
  overflow.classList.toggle("normal");
  overflow.classList.toggle("scale");
};
reboot.onclick = function(e) {
  window.location.reload();
};
