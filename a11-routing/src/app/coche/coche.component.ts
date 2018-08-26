import { Component } from '@angular/core';

@Component({
selector: 'coche-tag',
templateUrl: 'coche.component.html',
styleUrls: ['coche.component.css']


})

export class CocheComponent{
public marca:any;
public color:any;
public precio:number;

constructor(){
    this.marca = "Citroen ZX";
    this.color = "blue";
    this.precio = 100000;
}



}