import { Component} from '@angular/core';

@Component({
    selector: 'main-tag',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.css']
})

export class MainComponent{
public titulo:string;


constructor(){
    this.titulo = "Esta es la pagina principal";
}
}