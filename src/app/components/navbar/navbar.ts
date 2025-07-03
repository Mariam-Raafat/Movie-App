import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {DropdownModule} from 'primeng/dropdown'
@Component({
  selector: 'app-navbar',
  imports: [RouterModule,DropdownModule,FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
languages = [
  { label: 'EN', value: 'en' },
  { label: 'AR', value: 'ar' }
];

selectedLang = 'en';

}
