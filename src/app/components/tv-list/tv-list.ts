import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TmdbService } from '../../services/tmdb.service';
import { WatchListStore } from '../../signals/watchlist.store';
import { TranslateService } from '../../services/translation.service';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tv-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    BadgeModule,
    PaginatorModule,
  ],
  templateUrl: './tv-list.html',
})
export class TvList implements OnInit {
  tmdb = inject(TmdbService);
  watchListStore = inject(WatchListStore);
  translateService = inject(TranslateService);

  tvShows = signal<any[]>([]);
  isLoading = signal(true);
  currentPage = signal(1);
  totalResults = signal(0);
  rows = 20;

  ngOnInit() {
    this.loadTvShows(1);
  }

  loadTvShows(page: number) {
    this.isLoading.set(true);
    this.tmdb.getTvShowsList(page).subscribe({
      next: (res: any) => {
        this.tvShows.set(res.results);
        this.totalResults.set(res.total_results);
        this.currentPage.set(page);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false),
    });
  }

  onPageChange(event: any) {
    const newPage = event.page + 1;
    this.loadTvShows(newPage);
  }

  getRating(rating: number): string {
    if (rating >= 7) return 'bg-success';
    if (rating >= 5) return 'bg-warning';
    return 'bg-danger';
  }
}
