import { Component, OnInit, inject, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SelectModule } from 'primeng/select';
import { TranslateService } from '../../services/translation.service';
import { WatchListStore } from '../../signals/watchlist.store';
import { BadgeModule } from 'primeng/badge';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports:
    [RouterModule,
      FormsModule,
      SelectModule,
      BadgeModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar implements OnInit {
  translateService = inject(TranslateService);
  watchListStore = inject(WatchListStore);
  languages = [
    { label: 'EN', value: 'en' },
    { label: 'AR', value: 'ar' },
    { label: 'FR', value: 'fr' },
    { label: 'ZH', value: 'zh' }
  ];

  selectedLang = 'en';

  ngOnInit(): void {
    this.translateService.loadTranslations(this.selectedLang);
    this.setDirection(this.selectedLang);
  }

  onLangChange() {
    this.translateService.loadTranslations(this.selectedLang);
    this.setDirection(this.selectedLang);
  }

  private setDirection(lang: string) {
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
}
