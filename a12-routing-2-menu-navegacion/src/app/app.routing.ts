// Importamos los módulos necesarios para el routing
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importamos los componentes para usar

import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EmpleadoComponent } from './empleado/empleado.component'


//Defino las rutas 
const appRoutes: Routes = [
    //Defino ruta inicial
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'empleado', component: EmpleadoComponent },
    { path: 'contacto', component: ContactoComponent },

    // Hacemos que la ruta admita un parámetro (puede ser cualquier nombre)
    { path: 'contacto/:page', component: ContactoComponent },
    { path: '**', component: HomeComponent }
]


//Configuramos rutas

export const appRoutingProviders: any[] =[];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);