const botaoCamera = document.querySelector("[data-video-botao]");
const camera = document.querySelector("[data-camera]")
const video = document.querySelector("[data-video]");
const tiraFoto = document.querySelector("[data-tirar-foto]");
const mensagem = document.querySelector("[data-mensagem]");
const canvas = document.querySelector("[data-video-canvas]");
const botaoEnviar = document.querySelector("[data-enviar]");

let imagemURL = "";

botaoCamera.addEventListener("click", async function(){
    const iniciarCamera = await navigator.mediaDevices.getUserMedia({video: true, audio: false})

    botaoCamera.style.display = "none";
    camera.style.display = "block"


    video.srcObject = iniciarCamera;
})

tiraFoto.addEventListener("click", function(){
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);


    imagemURL = canvas.toDataURL("image/jpeg");

    camera.style.display = "none"
    mensagem.style.display = "block"

})

botaoEnviar.addEventListener("click", ()=>{
    const receberDadosExistentes = localStorage.getItem("cadastro");
    const converteRetorno = JSON.parse(receberDadosExistentes);

    converteRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno));

    window.location.href = "./abrir-conta-form-3.html"
})