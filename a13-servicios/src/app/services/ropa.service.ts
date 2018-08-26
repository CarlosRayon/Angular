import { Injectable } from "@angular/core";

@Injectable()

export class RopaService {
    // Propiedades del servicio
    public nombrePrenda: string = "Pantalones Vaqueros";
    public coleccionRopa: string[] = ["pantalones blancos", "camiseta"];

    //Metodos del servicio
    tituloServicio() {
        return "Servicio de Ropa";
    }

    conParametro(nombre) {
        return nombre;
    }

    //Indicamos lo que va a devolver
    addRopa(nombrePrenda: string): string[] {

        this.coleccionRopa.push(nombrePrenda);

        return this.getRopa();
    }

    getRopa():string[] {
        return this.coleccionRopa;
    }

    deleteRopa(index: number) {
        this.coleccionRopa.splice(index, 1);
        return this.getRopa();
    }


}