import { Routes } from '@angular/router';
import { PeliculasListComponent } from './peliculas-list/peliculas-list.component';

export const routes: Routes = [
    {path: '', component: PeliculasListComponent},
    {path: '**', redirectTo: ''}
];
