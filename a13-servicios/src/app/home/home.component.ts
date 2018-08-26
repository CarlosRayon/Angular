import { Component, OnInit } from '@angular/core';
//Importamos el servicio...
import { RopaService } from "../services/ropa.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  //...Proporcionamos el servicio a nuestra clase
  providers: [RopaService]

})


export class HomeComponent implements OnInit {

  public titulo: string = "Probando los servicios en Angular";

  // Propiedades que tomaran valores del servicio
  public nombre: string;
  public tituloServicio: string;
  public listadoRopa: string[];
  public prendaNueva: any;



  // Con esto conseguimos no tener que instancias un objeto del servicio, ya le tenemos inyectado en la clase
  constructor(private _ropaService: RopaService) {

  }

  ngOnInit() {

    //Guardo la propiedad del servicio en una propiedad de esta clase
    this.nombre = this._ropaService.nombrePrenda;

    //Muestro el valor que devuelve el metodo del servicio
    console.log(this._ropaService.conParametro("Camiseta"));

    //Guardo en una variable ya definida el valor devuelto por el metodo del servicio
    this.tituloServicio = this._ropaService.tituloServicio();

    //Guardo en una variable ya definida el valor devuelto por el metodo del servicio
    this.listadoRopa = this._ropaService.getRopa();


    console.log(this.listadoRopa);

  }

  //Función para añadir prendas a la lista
  guardarPrenda(){
    this._ropaService.addRopa(this.prendaNueva);

    //Para borrar el valor del input
    this.prendaNueva = null;
   
  }

  eliminarPrenda(index:number){
    this._ropaService.deleteRopa(index);
    alert("Se va a borrar:" +  index);
}

}
