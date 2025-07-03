import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TmdbService } from '../../services/tmdb.service';
import { ScrollerModule } from 'primeng/scroller';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-movie-list',
  imports: [ButtonModule,
    ScrollerModule,
    CommonModule,
    CardModule,
    BadgeModule,
    OverlayBadgeModule,
    PaginatorModule],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.scss'
})

export class MovieList implements OnInit {
  currentPage = 1;
  rows = 20;
  totalResults = 20*this.rows;
  movies: any[] = [];
  moviesService = inject(TmdbService);
  isFavorite = false;
  ngOnInit(): void {
    this.loadMovies(this.currentPage);
  }

  loadMovies(page:number){
    this.moviesService.getMoviesList(page).subscribe((data: any) => {
      console.log(data);
  
      this.movies = data.results;
    }
    )

  }

  onPageChange(envent: any) {
    this.currentPage = envent.page + 1;
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
  addToWatchList(movie: any) {
    movie.isFavorite = !movie.isFavorite;
  }

}
