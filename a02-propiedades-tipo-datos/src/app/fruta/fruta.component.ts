import { Component } from '@angular/core';

@Component({
    selector: 'fruta-tag',
    templateUrl: './fruta.component.html'
})

export class FrutaComponent{

/* -------- Visibilidad de las propiedades --------*/

public nombreComponent = 'Componente fruta';

/* -------- Propiedad privada. Aunque la podemos usar como una publica es buena practica para la programación para saber que no queremos mostrarla directamente --------*/

private propiedadPrivada ='Soy una propiedad privada';

/* -------- Tipos de datos (no seria necesario el public. Es por defecto la visibilidad) --------*/

public nombre:string = 'Carlos Rayón Álvarez';
       edad:number = 36;
public mayorDeEdad:boolean = true;
public comodin:any = "Cualquier dato con any";

/* -------- Dos formas de definir arrays --------*/
public trabajos:Array<string> = ['Informático',' Técnico',' Playboy'];
public numeros:number[] = [5,6,8,2,4,7];

/* -------- Si queremos combinar datos en el array --------*/
public multiArrayUno:Array<any> = ['Soy string', 36, 'otro string', true]
public multiArrayDos:any[] = ['Soy string ', 36, ' otro string', true ]



}