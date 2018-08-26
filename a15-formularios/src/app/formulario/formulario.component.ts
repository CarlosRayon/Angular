import { Component, OnInit } from '@angular/core';
import { Coches } from "../coche/coche";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {

  public coche: Coches;
  public nombre:string;
  public coches: Coches[];

  constructor() {

    this.coche = new Coches("", "", "");
    this.coches = [
      new Coches("Seat", "120", "Blanco"),
      new Coches("Renaul", "110", "Negro"),
      new Coches("Citroen", "60", "Azul")

    ]

  }

  onSubmit() {
    console.log(this.coche);
    this.coches.push(this.coche);
    this.coche = new Coches("", "", "");
  }

  ngOnInit() {

  }

}
