import { Component } from '@angular/core';

//Importo módulos necesarios para trabajar con el router y poder capturar el parámetro
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: "contacto-tag",
    templateUrl: "contacto.component.html",
    styleUrls: ["contacto.component.css"]
})

export class ContactoComponent {
    public titulo: string;
    // Defino propiedad donde guardare el parámetro
    public parametro: any;


    // Defino dos argumentos para poder capturar el parámetro
    constructor(private _route: ActivatedRoute, private _router: Router) {
        this.titulo = "Pagina de contacto de la web";

    }

    ngOnInit() {

        /* No funcionara. La función de callback normal no sirve
        this._route.params.forEach(function (params: Params) {
            this.parametro = params['page'];
            console.log(params);
        });*/

        //Usamos una función de flecha para que funcione

        this._route.params.forEach((params: Params) =>{
            this.parametro = params['page'];
            console.log(params);
        });

    }

    redirigir(){
        this._router.navigate(['/contacto', 'carlosrayon']);
    
    }
    
    redirigirEmpleado(){
        this._router.navigate(['/empleado']);
    
    }

    redirigirHome(){
        this._router.navigate(['/home', 'carlos']);
    
    }


}