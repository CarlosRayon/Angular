import { Component } from "@angular/core";
import { Cualidades } from "./Cualidades";

@Component({
    selector: "persona-tag",
    templateUrl: "persona.component.html",
    styleUrls: ["persona.component.css"]

})

export class PersonaComponent {

    // Propiedades \
    public nombre: string;
    public cualidades: Cualidades;
    public trabajos: string[];
    public ocupado: boolean;
    public datos: boolean;

    public colorSeleccionado: string;

    // Propiedades para el CSS \

    public ancho: string;
    public alto: string;

    // Constructor \

    constructor() {

        this.nombre = "Carlos Rayón";
        this.cualidades = new Cualidades("Trabajador", "alto", "moreno");
        this.trabajos = ["Panadero", "Técnico", "Desarrollador"];
        this.ocupado = false;
        this.datos = false;

        this.colorSeleccionado = "#CCC";



        this.ancho = "200px";
        this.alto = "200px";
    }

    // Metodos \
    /**
     * Metodo que se ejecuta por defecto
     */
    ngOnInit(): void {
        console.log(this.cualidades);
    }
    /**
     * Método para cambiar la propiedad ocupado
     */
    public cambiarOcupacion() {

        if (this.ocupado == true) {
            this.ocupado = false;
        } else {
            this.ocupado = true;
        }

        // this.ocupado = !this.ocupado;
    }
    /**
     * Metodo para cambiar la propiedad datos
     */
    public mostrarDatos() {

        if (this.datos == false) {
            this.datos = true;
        } else {
            this.datos = false;
        }

        // this.datos = !this.datos;
    }


    /**
     * Metodo que muestra el valor del color seleccionado por console.log
     */
    public logColor() {
        console.log(this.colorSeleccionado);
    }
}