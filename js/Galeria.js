//Creamos la clase Galeria y la exportamos para después poder importarle en nuestro archivo ejercicio.js
export default class Galeria {
    //Le pasamos el numero de imágenes al contructor
    constructor(numImagenes) {
        //Creo el array que va a guardar las imágenes
        this.imagenes = [];
        //Creo un índice para establecer la posición de la imagen (en 0)
        this.indice= 0; 
        //Recorremos el número de imágenes
        for(let i=1;i<=numImagenes;i++){
            //Creamos una variable imagen para que se llamen igual y que solo cambie el número
            var imagen = "foto"+i;
            //Se añade la imagen al array
            this.imagenes.push(imagen);
        }  
        }

        //Generamos una imagen aleatoria
        setImagenAleatorio() {
        //Se le asigna un random al indice para que sea aleatorio (Multiplicándolo por el número de imágenes)
        this.indice = Math.floor(Math.random() * this.imagenes.length);
        //Y devolvemos la imagen que se encuentra en ese índice
        return this.imagenes[this.indice ];
        }  

        //Método para devolver la imagen anterior de la que nos haya salido
        setImagenAnterior() {
        //Si hacemos esto no puede retroceder puesto que si estamos en la primera imagen (primera posición) no podemos ir a una imagen anterior, puesto que no existe
        if (this.indice !== 0) {
            //Hacemos que la imagen retroceda una posición (que el índice retroceda 1)
            var posicionAnterior = this.indice - 1;
            //Y se le asigna la nueva posición
            this.indice  = posicionAnterior;
        }
        //Se devuelva la posición de la nueva imagen que nos ha salido
        return this.imagenes[this.indice ];
        }

        //Método para devolver la primera imagen del array
        setImagenPrimero() {
        //Se le asigna el valor 0 puesto que es la primera posición del índice 
        this.indice  = 0;
        //Devolvemos la imagen que se encuentra en esa posición
        return this.imagenes[this.indice];
        }

        //Método para devolver la siguiente posición a la de la imagen que tengamos
        setImagenSiguiente() {
        //Lo mismo que el método anterior, pero esta vez para que no pueda avanzar más
        if(this.indice !==this.imagenes.length-1){ 
            //Le sumamos una posición al índice para que avance
            var posicionSiguiente = this.indice + 1;
            //Se le asigna su nueva posición al índice
            this.indice  = posicionSiguiente;
        }
        //Devuelvo la imagen que se sitúa en ese índice
        return this.imagenes[this.indice ];
        }
        
        //Método para devolver la última posición del array
        setImagenUltimo() {
        //Asginamos el último valor del array al índice
        this.indice  = this.imagenes.length - 1;
        //Y devolvemos la imagen que se encuentra en esa posición
        return this.imagenes[this.indice ];
        }
        
      

}