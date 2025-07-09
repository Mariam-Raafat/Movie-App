import { computed } from '@angular/core';
import {
  signalStore,
  patchState,
  withState,
  withComputed,
  withMethods
} from '@ngrx/signals';
import { Movie } from '../components/interfaces/movie.interface';

const localKey = 'watchlist-movies';

function getInitialWatchList(): Movie[] {
  const stored = localStorage.getItem(localKey);
  return stored ? JSON.parse(stored) : [];
}

export const WatchListStore = signalStore(
  { providedIn: 'root' },

  withState({
    watchList: getInitialWatchList() as Movie[]
  }),

  withComputed((state) => ({
    count: computed(() => state.watchList().length)
  })),

  withMethods((state) => ({
    removeFromWatchList: (movieId: number) => {
      const updated = state.watchList().filter((m) => m.id !== movieId);
      patchState(state, { watchList: updated });
      localStorage.setItem(localKey, JSON.stringify(updated));
    },

    toggleWatchList: (movie: Movie) => {
      const list = state.watchList();
      const exists = list.find((m) => m.id === movie.id);
      const updated = exists
        ? list.filter((m) => m.id !== movie.id)
        : [...list, movie];

      patchState(state, { watchList: updated });
      localStorage.setItem(localKey, JSON.stringify(updated));
    },

    isInWatchList: (movieId: number) =>
      computed(() => state.watchList().some((m) => m.id === movieId))
  }))
);
