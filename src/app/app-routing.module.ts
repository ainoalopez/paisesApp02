import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

// este será el primer componente que se muestre al entrar a la página
const routes: Routes = [
    {
       path: '',
       component: PorPaisComponent,
       pathMatch: 'full' // esta será la página que se mostrará
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        // el path del pais seguido del id del pais que estamos buscando
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        // excepcion
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes ) // importamos el routerModule, que hará la configuración de las routas
                                       // forRoot hace referéncia a las rutas principales
    ],
    exports: [
        RouterModule 
    ]
})

export class AppRoutingModule {}