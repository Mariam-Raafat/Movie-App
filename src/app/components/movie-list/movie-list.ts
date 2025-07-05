import {
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TmdbService } from '../../services/tmdb.service';
import {  RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ScrollerModule } from 'primeng/scroller';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { PaginatorModule } from 'primeng/paginator';
import { WatchListStore } from '../../signals/movie.store';
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
  ],
  templateUrl: './movie-list.html',
  styleUrls: ['./movie-list.scss'],
})
export class MovieList implements OnInit {
  currentPage = 1;
  rows = 20;
  totalResults = 20 * this.rows;
  movies: any[] = [];
  movie: any = null;
  watchListStore = inject(WatchListStore);
  private _moviesService = inject(TmdbService);
  

  ngOnInit(): void {
    this.loadMovies(this.currentPage);
  }

  loadMovies(page: number) {
    this._moviesService.getMoviesList(page).subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  onPageChange(event: any) {
    this.currentPage = event.page + 1;
    this.loadMovies(this.currentPage);
  }

  getRating(rating: number): string {
    if (rating >= 7) {
      return 'bg-success';
    } else if (rating >= 5) {
      return 'bg-warning';
    } else {
      return 'bg-danger';
    }
  }


}
