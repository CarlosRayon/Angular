import { Component } from "@angular/core";

/* -------- Importamos la clase Empleados --------*/
import { Empleado } from "./Empleado";

@Component({

    selector: "empleados-tag",
    templateUrl: "./empleados.component.html",
    styleUrls: ["./empleados.component.css"]

})

export class EmpleadosComponent {

    public titulo = "Componente empleados";

    /* -------- Defino un a propiedad para que sea de tipo empleado --------*/
    public empleado: Empleado;

    /* -------- Defino un array de objetos empleados --------*/

    public trabajadores: Empleado[];

    constructor() {

        /* -------- Instancio un objeto de tipo Empleado en la propiedad --------*/

        this.empleado = new Empleado("Carlos Rayón", 36, "Desarrollador", true);

        /* -------- Múltiples objetos en un array de objetos Empleados --------*/

        this.trabajadores = [

            new Empleado('Julio', 22, "Cocinero", false),
            new Empleado('Ines', 31, "Marketing", true),
            new Empleado('Dante', 66, "Asesino", false),

        ];
    }

    ngOnInit() {

        console.log(this.empleado);
        console.log(this.trabajadores);
    }

}