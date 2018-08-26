import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';



// importamos los componentes que vamos a usar
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { CocheComponent } from './coche/coche.component';
import { MainComponent } from './main/main.component';

// importamos las rutas que vamos a usar
import { routing, appRoutingProviders } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PersonaComponent, 
    CocheComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
 
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})

export class AppModule { }
