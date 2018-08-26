import { Component } from '@angular/core';
import { templateJitUrl } from '../../../node_modules/@angular/compiler';

@Component({
    selector: 'empleado-tag',
    templateUrl: 'empleado.component.html',
    styleUrls: ['empleado.component.css']
})

export class EmpleadoComponent{


public nombre:string;
public edad:number;
public trabajos:string[];


constructor(){
    this.nombre = "Carlos";
    this.edad = 36;
    this.trabajos = [
        "Panadero", "Tecnico", "Desarrollador"
    ]
}




}