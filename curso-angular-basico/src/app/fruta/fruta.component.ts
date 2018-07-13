import { Component } from '@angular/core';

@Component({
    /* -------- Definimos el selector que llamara al componente --------*/
    selector: 'fruta',

    /* Puedo definir elementos en linea...
    template: `   <h2>{{nombreComponente}}</h2>
    <p>{{listadoFrutas}}</p>
    `,
    */
   
    /* -------- O puedo definir elementos en una plantilla aparte --------*/

    templateUrl: './fruta.component.html'
})

/* -------- Exportamos la clase para poder usarla en cualquier componente --------*/
export class FrutaComponent{

/* -------- Definimos unas propiedades que podemos usar en la plantilla del componente --------*/
    public nombreComponente = 'Componente de fruta';
    public listadoFrutas = 'Naranja, Manzana, Pera, Sandia';
}