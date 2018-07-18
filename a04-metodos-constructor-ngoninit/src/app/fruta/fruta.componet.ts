import { Component } from "@angular/core";
@Component({
    selector: 'fruta-tag',
    templateUrl: './fruta.component.html'

})

export class FrutaComponent {

    /* --------Propiedades sin tipado --------*/
    public nombreComponent = 'Componente fruta';
    private propiedadPrivada = 'Soy una propiedad privada';

    /* -------- Propiedades con tipado --------*/
    public nombre: string;
    public edad: number;

    public comodin: any = "Cualquier dato con any";
    public trabajos: Array<string> = ['Informático', ' Técnico', ' Playboy'];


    /* ------------------------------------ */
    /* CONSTRUCTOR*/
    /* Es el primero método que se lanzara al llamar la objeto (al usar el tag del componente) */
    /* ------------------------------------ */

    constructor() {
        /* -------- Definimos las propiedades --------*/
        this.nombre = 'Carlos Rayón Álvarez';
        this.edad = 36;
        this.comodin = "Cualquier dato me vale"

        /* ------------------------------------ */
        /* Puedo definir cualquier función en el constructor o llamarla con this pero no es buena practica. Mejor en el ngOnInit */
        // console.log(this.trabajos);
        // document.getElementById('h1').innerHTML = "Titulo cambiado con js";
        /* ------------------------------------ */
    }


    /* ------------------------------------ */
    /* ngOnInit */
    /* Función para llamar a los métodos. Se ejecuta justo después del constructor
    /* ------------------------------------ */

    ngOnInit() {

        /* -------- Usamos los métodos de la clase --------*/
        this.holaMundo(this.nombre);

        this.cambiarNombre();

        this.holaMundo(this.nombre);
    }

    /* ------------------------------------ */
    /* MÉTODOS */
    /* ------------------------------------ */
    holaMundo(nombre) {
        alert("Hola mundo. Soy " + nombre);
    }

    cambiarNombre() {
        this.nombre = 'Nombre cambiado';
    }

}