import { CommonModule } from '@angular/common';
import { Component ,inject} from '@angular/core';
import { WatchListStore } from '../../signals/movie.store';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-watch-list',
  imports: [CommonModule,RouterModule,],
  templateUrl: './watch-list.html',
  styleUrl: './watch-list.scss'
})
export class WatchList {
watchListStore = inject(WatchListStore);
}
