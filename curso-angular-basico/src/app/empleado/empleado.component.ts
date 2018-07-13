import {Component} from '@angular/core';
/* -------- Defino un componente --------*/
@Component({
selector: 'empleados-tag',
templateUrl: './empleado.component.html'
})

/* -------- Exporto el componente con sus propiedades --------*/
export class EmpleadoComponent{
    public titulo = 'Titulo del componente empleado';

}