import { Component } from '@angular/core';
import { HeaderComponent } from './core/header/header';
import { FooterComponent } from './core/footer/footer';
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule], // ✅ only components here
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent { }
