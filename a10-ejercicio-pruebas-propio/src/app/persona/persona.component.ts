import { Component } from '@angular/core';

import { Persona } from './Persona';

@Component({
    selector: "persona-tag",
    templateUrl: "persona.component.html",
    styleUrls: ["persona.component.css"]
})

export class PersonaComponent {

    //Propiedades
    public listaPersonas: Persona[];
   
    constructor() {
        this.listaPersonas = [
            new Persona('Carlos', 36, true, "Citroen"),
            new Persona('Ines', 31, true, "Opel"),
            new Persona('Santi', 30, true, "Mazda")
        ]
    }

    ngOnInit(){
        console.log(this.listaPersonas);
    }







}