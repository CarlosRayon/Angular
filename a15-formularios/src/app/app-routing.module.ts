import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { CocheComponent } from "./coche/coche.component";


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "formulario", component: FormularioComponent },
  { path: "coche", component: CocheComponent },
  { path: "**", component: HomeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
