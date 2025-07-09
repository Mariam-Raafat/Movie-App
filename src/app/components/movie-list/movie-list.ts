import {
  Component,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ScrollerModule } from 'primeng/scroller';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { PaginatorModule } from 'primeng/paginator';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovieStore } from '../../signals/movies.store';
import { WatchListStore } from '../../signals/watchlist.store';
import { TranslateService } from '../../services/translation.service';
import { TmdbService } from '../../services/tmdb.service';
import { TvList } from '../tv-list/tv-list';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    ScrollerModule,
    CardModule,
    BadgeModule,
    OverlayBadgeModule,
    PaginatorModule,
    ReactiveFormsModule,
    TvList
  ],
  templateUrl: './movie-list.html',
  styleUrls: ['./movie-list.scss'],
})
export class MovieList {
  moviesStore = inject(MovieStore);
  watchListStore = inject(WatchListStore);
  translateService = inject(TranslateService);
  private _router = inject(Router);
  private _formBuilder = inject(FormBuilder);
  private tmdb = inject(TmdbService);

  // Toggle Tabs
  activeTab: 'movies' | 'tv' = 'movies';

  // TV Shows Data
  tvShows: any[] = [];
  tvIsLoading = false;
  tvPage = 1;
  rows = 20;
  totalResults = 20 * this.rows;

  searchForm = this._formBuilder.group({
    searchInput: ['', Validators.required]
  });

  onSubmit() {
    const searchInput = this.searchForm.get('searchInput')?.value?.trim();
    if (searchInput) {
      this._router.navigate(['search-result'], {
        queryParams: { q: searchInput }
      });
    }
  }

  onPageChange(event: any) {
    const newPage = event.page + 1;
    if (this.activeTab === 'movies') {
      this.moviesStore.loadMovies(newPage);
    } else {
      this.loadTvShows(newPage);
    }
  }

  loadTvShows(page = 1) {
    this.tvIsLoading = true;
    this.tmdb.getTvShowsList(page).subscribe({
      next: (res: any) => {
        this.tvShows = res.results;
        this.tvPage = page;
        this.totalResults = res.total_results;
        this.tvIsLoading = false;
      },
      error: () => {
        this.tvIsLoading = false;
      }
    });
  }

  getRating(rating: number): string {
    if (rating >= 7) return 'bg-success';
    if (rating >= 5) return 'bg-warning';
    return 'bg-danger';
  }
}
