import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PipesComponent } from './pipes/pipes.component';
import { NavComponent } from './nav/nav.component';

// Importamos la creación propia de pipes
import { AlrevesPipe } from './pipes-propios/alreves.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PipesComponent,
    NavComponent,
    //Declaro el pipe
    AlrevesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
