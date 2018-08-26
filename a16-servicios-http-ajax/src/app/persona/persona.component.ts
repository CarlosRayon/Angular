import { Component, OnInit } from '@angular/core';

//importamos los servicios que vamos a usar
import { PeticionesService } from "../services/peticiones.service";
import { PeticionService } from "../services/peticion.service";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss'],
  providers: [PeticionesService, PeticionService]

})

export class PersonaComponent implements OnInit {

  public nombre: string;
  public edad: number;
  public datoCLI: string;
  public datoTuto: string;
  public articulos;

  // MUY IMPORTANTE DECLARAR LOS SERVICIOS. Los podemos usar directamente EN EL CONSTRUCTOR.(De esta manera no tenemos que instanciar el objeto como vemos a continuación)
  // public servicio = new PeticionesService();

  constructor(private _peticion: PeticionService, private _peticiones: PeticionesService) {
    this.nombre = "Carlos";
    this.edad = 36;


    //Usamos las funcione  que nos ofrece los servicios
    this.datoCLI = this._peticion.getPrueba();
    this.datoTuto = this._peticiones.getPrueba();
   

  }

  ngOnInit() {
    console.log(this._peticiones.getPrueba());
    console.log(this._peticion.getPrueba());
    // console.log(this.servicio.getPrueba());


    this._peticiones.getArticulos().subscribe(
      //Si la peticion a sido correcta
      result => {
        //Guardamos los datos en una variable
        this.articulos = result;

        //Podemos mandar mensaje de error si no se ha recibido los datos bien
        if(!this.articulos){
          console.log("Error en el servidor");
        }
        console.log(result)
      },

      //En caso de error a pedir el servicio
      error => {
        var errorMensaje = <any>error;
        console.log(errorMensaje);
      }
    );

  }

}
