import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from './translation.service';

@Injectable({ providedIn: 'root' })
export class TmdbService {
  private http = inject(HttpClient);
  private translateService = inject(TranslateService);
  private _baseApi = 'https://backend-for-tmdb.onrender.com/api/tmdb';

  private get lang() {
    return this.translateService.currentLanguage;
  }

  getMoviesList(page: number) {
    return this.http.get(this._baseApi, {
      params: {
        endpoint: 'movie/now_playing',
        page,
        language: this.lang
      }
    });
  }

  getMovieDetails(id: number | string) {
    return this.http.get(this._baseApi, {
      params: {
        endpoint: `movie/${id}`,
        language: this.lang
      }
    });
  }

  getReviews(id: number | string) {
    return this.http.get(this._baseApi, {
      params: {
        endpoint: `movie/${id}/reviews`,
        language: this.lang
      }
    });
  }

  getRecommendations(id: number | string) {
    return this.http.get(this._baseApi, {
      params: {
        endpoint: `movie/${id}/recommendations`,
        language: this.lang
      }
    });
  }

  searchMovies(query: string, page: number) {
    return this.http.get(this._baseApi, {
      params: {
        endpoint: 'search/movie',
        query,
        page,
        language: this.lang
      }
    });
  }

getTvShowsList(page = 1) {
  return this.http.get(this._baseApi, {
    params: {
      endpoint: 'tv/popular',
      page,
      language: this.lang
    }
  });
}
getTvShowDetails(id: number | string) {
  return this.http.get(this._baseApi, {
    params: {
      endpoint: `tv/${id}`,
    }
  })
} 

getTvShowRecommendations(id: number | string) {
  return this.http.get(this._baseApi, {
    params: {
      endpoint: `tv/${id}/recommendations`,
    }
  })
}  

getTvShowReviews(id: number | string) {
  return this.http.get(this._baseApi, {
    params: {
      endpoint: `tv/${id}/reviews`,
    }
  })
}
}
