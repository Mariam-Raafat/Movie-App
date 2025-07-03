import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private _baseApi = 'https://backend-for-tmdb.onrender.com/api/tmdb'
  constructor(private http: HttpClient) { }
  getMoviesList(page: number) {
    return this.http.get(this._baseApi, {
      params: {
        endpoint: 'movie/now_playing',
        page
      }
    })
  }
}
