
document.querySelector('.texto-usuario').addEventListener('input', function() {
    var caracteresNoValidos = /[A-ZÁÉÍÓÚÜáéíóúü]|['´`]/g;
    var noEsValido = false;
    if (caracteresNoValidos.test(this.value)) {
      noEsValido = true;
    }  
    this.value = this.value.toLowerCase();
    this.value = this.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    var exclamacion = document.getElementById("exclamacion");
    exclamacion.classList.add('animation-show');
    setTimeout(function() {
      exclamacion.classList.remove('animation-show');
    }, 2000);    
  });
  

let carga = document.getElementById("texto-usuario");//textarea
let descarga = document.getElementById("parrafo-a-copiar")//textarea
let imagen = document.querySelector(".mostrar").classList
let encriptado = document.querySelector(".encriptado").classList
const dictioA = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"}
const dictioB = { "ai" :"a", "enter" : "e", "imes" : "i", "ober" :"o", "ufat" : "u"}

  document.querySelector('#encriptador').addEventListener('click', function(event){
    event.preventDefault(); 
    let str = carga.value;
    str = str.replace(/a|e|i|o|u/g, (coincidencia) => {
     return dictioA[coincidencia];
    });
    imagen.add("no-mostrar")
    encriptado.remove("no-mostrar")
    descarga.value = str;
    carga.value = "";
  });

  document.getElementById('desencriptador').addEventListener('click', function(event){
    event.preventDefault(); 
    let str = carga.value
    str = str.replace(/ai|enter|imes|ober|ufat/g, (coincidencia) => {
        return dictioB[coincidencia];
    })
    carga.value = str
  });


var botonCopiar = document.querySelector(".boton-copiar");

  botonCopiar.addEventListener("click", function() {
    descarga.select();
    document.execCommand("copy");
    descarga.value = "";
    encriptado.add("no-mostrar");
    imagen.remove("no-mostrar");
  });


let area = document.getElementsByClassName("text-area")
        
window.addEventListener("DOMContentLoaded", () => {
  area.forEach((elemento) => {
    elemento.style.height = `${elemento.scrollHeight}px`
  })
})   
   
