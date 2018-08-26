import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importo el modulo de Formularios 
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    //Declaro la importación del modulo
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
