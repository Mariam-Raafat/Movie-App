import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TranslateService {
  private apiUrl = 'https://backend-for-tmdb.onrender.com/api/translations';

  private _translations = signal<Record<string, string>>({});
  private _currentLang = signal<string>('en');

  private http = inject(HttpClient);

  public readonly translations = this._translations.asReadonly();
  public readonly currentLang = this._currentLang.asReadonly();

  loadTranslations(lang: string) {
    this._currentLang.set(lang);
    this.http.get<Record<string, string>>(`${this.apiUrl}?lang=${lang}`).subscribe({
      next: (data) => this._translations.set(data),
      error: (err) => {
        console.error('Failed to load translations:', err);
        this._translations.set({});
      }
    });
  }

  translate(key: string): string {
    return this._translations()[key] || key;
  }

  get currentLanguage(): string {
    return this._currentLang();
  }
}
