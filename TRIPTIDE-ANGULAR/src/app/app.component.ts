import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DisplayPortComponent } from './display-port/display-port.component';
import { FooterComponent } from './footer/footer.component';
import { HomeViewComponent } from './home-view/home-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, CommonModule, FormsModule,
    HeaderComponent, DisplayPortComponent, FooterComponent,
    HomeViewComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TripTideTours';
}
