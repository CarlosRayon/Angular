import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  public fecha;
  public texto: string;

  constructor() {
    this.fecha = new Date(2017, 4, 5);
    this.texto = " Esto es un texto de prueba para probar pipes";
  }

  ngOnInit() {
  }

}
