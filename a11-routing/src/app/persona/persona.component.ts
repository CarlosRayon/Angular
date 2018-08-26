import { Component } from '@angular/core';

@Component({
    selector: 'persona-tag',
    templateUrl: 'persona.component.html',
    styleUrls: ['persona.component.css']
})

export class PersonaComponent{

    // Propiedades

    public nombre:string;
    public edad:number;
    public coche:boolean;

    constructor(){
        this.nombre = "Carlos";
        this.edad = 36;
        this.coche = true;
    }



}