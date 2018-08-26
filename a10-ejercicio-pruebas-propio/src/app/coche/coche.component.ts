import { Component } from '@angular/core';

import { PersonaComponent } from '../persona/persona.component';

@Component({
    selector: "coche-tag",
    templateUrl: "coche.component.html",
    styleUrls: ["coche.component.css"]
})

export class CocheComponent {
    public marca: string;
    public modelo: string;
    public precio: number;

    public mostrarDatos: boolean;
    public cambiarDatos: boolean;

    public personas: PersonaComponent;

    constructor() {
        this.marca = "Citroen",
            this.modelo = "ZX",
            this.precio = 10000,
            this.mostrarDatos = false;
        this.cambiarDatos = false;

        this.personas = new PersonaComponent();
    }

    ngOnInit(): void {
        console.log(this.personas);

    }


    setMarca(marca) {
        this.marca = marca;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    setPrecio(precio) {
        this.precio = precio;
    }


    mostrarCoche() {
        if (this.mostrarDatos == false) {
            this.mostrarDatos = true;
        } else {
            this.mostrarDatos = false;
        }
    }

    mostrarCambioCoche() {
        if (this.cambiarDatos == false) {
            this.cambiarDatos = true;
        } else {
            this.cambiarDatos = false;
        }
    }

}