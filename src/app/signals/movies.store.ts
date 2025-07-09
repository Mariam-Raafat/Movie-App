import { computed, inject, signal } from '@angular/core';
import {
  signalStore,
  withComputed,
  withState,
  withMethods,
  withHooks,
  patchState,
} from '@ngrx/signals';
import { TmdbService } from '../services/tmdb.service';
import { TranslateService } from '../services/translation.service';
import { effect } from '@angular/core';
export const MovieStore = signalStore(
  { providedIn: 'root' },

  withState({
    movies: [] as any[],
    currentPage: 1,
    totalResults: 0,
    isLoading: false,
  }),

  withComputed((state) => ({
    hasMovies: computed(() => state.movies().length > 0)
  })),

  withMethods((state) => {
    const tmdb = inject(TmdbService);

    return {
      loadMovies: (page = 1) => {
        patchState(state, { isLoading: true, currentPage: page });

        tmdb.getMoviesList(page).subscribe({
          next: (res: any) => {
            patchState(state, {
              movies: res.results,
              totalResults: res.total_results,
              isLoading: false
            });
          },
          error: () => {
            patchState(state, { isLoading: false });
          }
        });
      }
      
    };
    
  }),

  withHooks({
    onInit: (store) => {
      const translateService = inject(TranslateService);

      effect(() => {
        const lang = translateService.currentLang();
        store.loadMovies(store.currentPage()); 
      });
    }
  })
  
);
