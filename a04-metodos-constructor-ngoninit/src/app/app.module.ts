import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importo componentes que usare
import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.componet';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
