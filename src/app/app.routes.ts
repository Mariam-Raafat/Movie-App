import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadComponent: () => import('./components/movie-list/movie-list').then(m => m.MovieList)
},
{
    path: 'movie-details/:id',
    loadComponent: () => import('./components/movie-details/movie-details').then(m => m.MovieDetails)
},
{
    path: 'watch-list',
    loadComponent: () => import('./components/watch-list/watch-list').then(m => m.WatchList)
}


];
