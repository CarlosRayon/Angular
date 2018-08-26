import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PipesComponent } from "./pipes/pipes.component";

const routes: Routes = [
{path:"", component:HomeComponent},
{path:"pipes", component:PipesComponent},
{path:"home", component: HomeComponent},
{path:"**", component:HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
