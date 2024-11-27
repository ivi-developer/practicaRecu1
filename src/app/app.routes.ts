import { Routes } from '@angular/router';
import { PilotoFormPageComponent } from './pilotos/pages/piloto-form-page/piloto-form-page.component';
import { PilotoListPageComponent } from './pilotos/pages/piloto-list-page/piloto-list-page.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { PilotoDetallesPageComponent } from './pilotos/pages/piloto-detalles-page/piloto-detalles-page.component';


export const routes: Routes = [
    {
        path: "pilotos-form",
        component: PilotoFormPageComponent
    },
    {
        path: "pilotos-list",
        component: PilotoListPageComponent
    },
    {
        path: "piloto-detalles/:id",
        component: PilotoDetallesPageComponent
    },
    {
        path: "home",
        component: HomePageComponent
    },
    {
        path: "**",
        redirectTo: "home"
    }
];
