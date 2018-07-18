import { Component } from "@angular/core";
import { Empleado } from "./Empleado";

@Component({

selector: "empleado-tag",
templateUrl: "empleado.component.html",
styleUrls: ["empleado.component.css"]

})

export class EmpleadoComponent{

public listaEmpleado:Empleado[];

public listaNumeros:number[] = [1,3,5,7,9];


constructor(){

    this.listaEmpleado = [

        new Empleado ("Carlos", 36, "Desarrollador", true),
        new Empleado ("Ines", 31, "Marketing", true),
        new Empleado ("Dante", 100, "MataDemonios", false)

    ]

}


ngOnInit(){
    console.log(this.listaEmpleado);
}
}