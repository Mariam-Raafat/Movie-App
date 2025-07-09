import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule,Router } from '@angular/router';
import { TmdbService } from '../../services/tmdb.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './search-result.html',
  styleUrls: ['./search-result.scss'],
})
export class SearchResult implements OnInit {
  private tmdb = inject(TmdbService);
  private route = inject(ActivatedRoute);
  results = signal<any[]>([]);
  loading = signal(false);
  private _router = inject(Router)
  private _formBuilder = inject(FormBuilder);
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const q = params['q'];
      if (q) {
        this.loading.set(true);
        this.tmdb.searchMovies(q,1).subscribe((data: any) => {
          this.results.set(data.results);
          this.loading.set(false);
        });
      }
    });
  }
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
}
