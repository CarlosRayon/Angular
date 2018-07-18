import { Component } from "@angular/core";
import { Empleado } from "./Empleado";

@Component({

    selector: "empleado-tag",
    templateUrl: "empleado.component.html",
    styleUrls: ["empleado.component.css"]

})

export class EmpleadoComponent {

    public listaEmpleados: Empleado[];
    public color:string;
    public numero:number;

    constructor() {
        this.listaEmpleados = [
            new Empleado("Carlos", 36, "Desarrollador", true),
            new Empleado("Ines", 31, "Marketing", false),
            new Empleado("Mario", 36, "Come setas", true),
        ]
        
        this.color = "red";
        this.numero = 5;
    }


    ngOnInit(){
        console.log(this.listaEmpleados);
    }

   




}