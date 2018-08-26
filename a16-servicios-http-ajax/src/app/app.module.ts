import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//MUY IMPORTANTE TENER IMPORTADO EL MODULO HTTP PARA PODER HACER LAS PETICIONES
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
