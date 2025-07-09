import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../services/tmdb.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WatchListStore } from '../../signals/watchlist.store';

@Component({
  selector: 'app-tv-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tv-details.html',
})
export class TvDetails implements OnInit {
  route = inject(ActivatedRoute);
  tmdb = inject(TmdbService);
  watchListStore = inject(WatchListStore);

  tv: any = null;
  tvRecommendations: any[] = [];
  tvReviews: any[] = [];
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tmdb.getTvShowDetails(id).subscribe((res) => {
        this.tv = res;
      });
      this.tmdb.getTvShowRecommendations(id).subscribe((res: any) => {
        this.tvRecommendations = res.results;
      });
  
      this.tmdb.getTvShowReviews(id).subscribe((res: any) => {
        this.tvReviews = res.results;
      });
    }
  }
}
