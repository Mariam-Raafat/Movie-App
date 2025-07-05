import {
  Component,
  inject,
  OnInit,
  computed,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TmdbService } from '../../services/tmdb.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  templateUrl: './movie-details.html',
  styleUrls: ['./movie-details.scss'],
  imports: [CommonModule],
})
export class MovieDetails implements OnInit {
  private _tmdbService = inject(TmdbService);
  private _route = inject(ActivatedRoute);

  readonly paramMap = toSignal(this._route.paramMap, { initialValue: null });
  readonly movieId = computed(() => this.paramMap()?.get('id') || '');

  movie: any = null;
  loading = true;
  isFavorite = false;
  recommendations: any[] = [];
  reviews: any[] = [];

  ngOnInit(): void {
    const id = this.movieId();

    if (id) {
      this.loading = true;

      this._tmdbService.getMovieDetails(id).subscribe((data) => {
        this.movie = data;
        this.loading = false;
      });

      this._tmdbService.getRecommendations(id).subscribe((data:any) => {
        this.recommendations = data.results;
      });

      this._tmdbService.getReviews(id).subscribe((data:any) => {
        this.reviews = data.results;
      });
    }
  }

  getRating(rating: number): string {
    if (rating >= 7) return 'bg-success text-white';
    if (rating >= 5) return 'bg-warning text-dark';
    return 'bg-danger text-white';
  }

  addToWatchList(movie: any) {
    movie.isFavorite = !movie.isFavorite;
  }
}
