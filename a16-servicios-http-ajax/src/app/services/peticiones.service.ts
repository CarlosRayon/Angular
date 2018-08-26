import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PeticionesService {
    // URL de donde cogeremos datos de un servicio externo
    public url: string;
    constructor(private _http: Http) {

        this.url = "https://jsonplaceholder.typicode.com/posts";
    }

    getPrueba() {
        return "Datos desde un servicio siguiendo el tutorial";
    }

    //Petición ajax por GET
    
    getArticulos() {
        return this._http.get(this.url)
                                    .map(res => res.json());
    }

}