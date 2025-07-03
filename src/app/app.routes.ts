import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadComponent: () => import('./components/movie-list/movie-list').then(m => m.MovieList)
}

];
