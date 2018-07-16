import { Component } from "@angular/core";

@Component({
selector: "fruta-tag",
templateUrl: "fruta.component.html"

})

export class FrutaComponent{

public nombre:string;
public tipo:any;
public cantidad:number;

constructor(){
    this.nombre = "Manzana";
    this.tipo = "fruta";
    this.cantidad = 10;
}

/* -------- Metodos --------*/
setNombre(nombre){
    this.nombre = nombre;
    
}

ngOnInit(){
    /* ------------------------------------ */
/* VARIABLES Y ALCANCES (dentro de una función deben ir)*/
// La variables let actúan a nivel de bloque (entre {})
// La variables var son globales
/* ------------------------------------ */

var uno = 8;
var dos = 15;

console.log("La variable dos es: " , dos);

if(uno == 8){
    let uno = 3; //Solo de este bloque
    var dos = 88; //Global, a cambiar la cambio de forma global

    console.log("Dentro del if: " , uno);
    console.log(dos);
}

console.log("La variable uno es: " , uno);
console.log("La variable dos es: " , dos);


}





}