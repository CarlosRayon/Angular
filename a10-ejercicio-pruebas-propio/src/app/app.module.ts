import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importante importar el modulo FormsModule
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { CocheComponent } from './coche/coche.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    CocheComponent
  ],

  imports: [
    BrowserModule,
    FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
