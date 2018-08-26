// Importamos los módulos de angular que tiene que ver con el routing

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importamos los componentes que vamos a usar
import { MainComponent } from './main/main.component';
import { PersonaComponent } from './persona/persona.component';
import { CocheComponent } from './coche/coche.component';


// Definimos una constante del tipo Routes con las rutas que debe cargar el navegador
const appRoutes: Routes = [

    //CUIDADO CON EL ORDEN SEGUIR ESTE SINO NO FUNCIONA EL ROUTING
    // Ruta inicial que cargara cuando la url no tenga dirección (pagina home)
    { path: '', component: MainComponent },

    // Rutas que usaremos para llamar a los componentes
    { path: 'persona', component: PersonaComponent },
    { path: 'coche', component: CocheComponent },

    //Ruta por defecto cuando no exista la ruta pasada por ur (Cuando la ruta falle. Pagina de error 404 )
    { path: '**', component: MainComponent }
];


// Configuramos las rutas
export const appRoutingProviders: any[] = [];

//Indicamos que array de ruta tiene que cargar (Las definida antes)
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);