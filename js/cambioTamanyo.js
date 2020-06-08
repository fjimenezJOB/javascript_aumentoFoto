/*
    Ejercicio para practicar la modificacion de elementos del HTML con JavaScript
    Autor: Fran Jiménez
    Version : unica version que voy a hacer XD
*/

const IMAGEN = document.getElementById("imagenAumentada");

function cambiarTamaño() {
  // creamos una variable que actua como interruptor
  var aumentada = false;
  // creamos el listener que comprueba cuando le hacen click a la imagen
  IMAGEN.addEventListener("click", function () {

    if (!aumentada) {
      // si el "interruptor" está en false aumentaremos la imagen y lo dejaremos en true
      IMAGEN.style.width = "500px";
      aumentada = true;
    } else if (aumentada) {
      // si el interruptor está en true disminuimos el tamaño de la imagen, y ponemos el interruptor en false
      IMAGEN.style.width = "100px";
      aumentada = false;
    }
  });
}
cambiarTamaño();