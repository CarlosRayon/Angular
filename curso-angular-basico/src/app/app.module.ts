import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* -------- Importo los componentes --------*/
import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
/* -------- Los declaro para poder usarlos --------*/
@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
