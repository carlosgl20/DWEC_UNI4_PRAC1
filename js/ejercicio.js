//Importamos la clase Galería
import Galeria from "./Galeria";

//Creamos el evento para cargar la página
window.addEventListener('load', inicioPagina);

//Se crea Galeria con 7 imágenes porque tenemos 7 fotos
var galeria = new Galeria(7);

//Creamos variables para cada elemento del html
var contenedor = document.getElementById("imagen");
var primera = document.getElementById("primera");
var siguiente = document.getElementById("siguiente");
var anterior = document.getElementById("anterior");
var ultima = document.getElementById("ultima");

//Función que salta nada más se cargue la página
function inicioPagina() {
    //Guardamos la imagen aleatoria en una variable
    var imagenAleatoria = galeria.setImagenAleatorio();
    //Aplicamos la imagen aleatoria en el contenedor
    contenedor.style.backgroundImage = "url(" + "../images/" + imagenAleatoria + ".jpg)";
    //Añadimos eventos a los html
    primera.addEventListener("click", esquinas);
    siguiente.addEventListener("click", mover);
    anterior.addEventListener("click", mover);
    ultima.addEventListener("click", esquinas);
    deshabilitarHabilitar();
}

//Función para guardar última y primera imagen
function esquinas(event) {

    if (event.target.id === ultima.id) {
        //Guardamos la última imagen 
        var imagenUltima = galeria.setImagenUltimo();
        //Y ponemos la última imagen
        contenedor.style.backgroundImage = "url(" + "../images/" + imagenUltima + ".jpg)";
        deshabilitarHabilitar();
    }
    else if (event.target.id === primera.id) {
        //Guardamos la primera imagen
        var imagenPrimera = galeria.setImagenPrimero();
        //Y ponemos la primera imagen
        contenedor.style.backgroundImage = "url(" + "../images/" + imagenPrimera + ".jpg)";
        deshabilitarHabilitar();
    }
}

//Nos permite movernos a la izquierda o a la derecha
function mover(event) {
    if (event.target.id === siguiente.id) {
        //Guardamos la imagen siguiente
        var imagenSiguiente = galeria.setImagenSiguiente();
        //Ponemos la imagen siguiente
        contenedor.style.backgroundImage = "url(" + "../images/" + imagenSiguiente + ".jpg)";
        deshabilitarHabilitar();
    }
    else if (event.target.id === anterior.id) {
        //Guardamos la imagen anterior
        var imagenAnterior = galeria.setImagenAnterior();
        //Ponemos la imagen anterior
        contenedor.style.backgroundImage = "url(" + "../images/" + imagenAnterior + ".jpg)";
        deshabilitarHabilitar();
    }
}

//Función para deshabilitar o habilitar los botones en función de donde se situe el cursor
function deshabilitarHabilitar() {
    //Si el indice está en la primera posición: 
    if (galeria.cursor === 0) {

        //Deshabilitamos los botones de primera y anterior
        primera.classList.add("deshabilitado");
        anterior.classList.add("deshabilitado");
        siguiente.classList.remove("deshabilitado");
        ultima.classList.remove("deshabilitado");

        //Si el cursor está en el último: 
    } else if (galeria.cursor === galeria.imagenes.length - 1) {

        //Deshabilitamos los botones de siguiente y última
        primera.classList.remove("deshabilitado");
        anterior.classList.remove("deshabilitado");
        siguiente.classList.add("deshabilitado");
        ultima.classList.add("deshabilitado");
    }
}