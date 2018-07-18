import { Component } from "@angular/core";

import {Empleado} from "./Empleado";

@Component({
    selector: "empleado-tag",
    templateUrl: "./empleado.component.html",
    styleUrls: ["./empleado.component.css"]
})

export class EmpleadoComponent {

public empleado:Empleado;
public arrayEmpleado:Empleado[];
public trabajadorExterno:boolean;
public conContrato:string = "Tiene contrato";
public sinContrato:string = "No tiene contrato";

constructor(){
    this.empleado = new Empleado("Carlos", 36, "Informatico", false);

    this.arrayEmpleado = [
        new Empleado("Ines", 31, "Marketing", true),
        new Empleado ("Julio" , 40 , "Vago de nacimiento", false),
        new Empleado ("Dante" , 100 , "Mata demonios", true)
    ]


    this.trabajadorExterno = true;
}
ngOnInit(){
    console.log(this.empleado);
    console.log(this.arrayEmpleado);
}
public cambiarExterno (valor:boolean){
    this.trabajadorExterno = valor;
}



}