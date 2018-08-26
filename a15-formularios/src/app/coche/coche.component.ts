import { Component, OnInit } from '@angular/core';
import { Coches } from "./coche";

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})

export class CocheComponent implements OnInit {
  public coche: Coches;


  constructor() {
    this.coche = new Coches("", "", "");

  }

ngOnInit(){

}
}
