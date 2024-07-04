
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeViewComponent } from '../home-view/home-view.component';
import { ToursViewComponent } from '../tours-view/tours-view.component';
import { BookingsViewComponent } from '../bookings-view/bookings-view.component';
import { AuthViewComponent } from '../auth-view/auth-view.component';
import { HotelsViewAdminComponent } from '../hotels-view-admin/hotels-view-admin.component';
import { ToursViewAdminComponent } from '../tours-view-admin/tours-view-admin.component';
import { BookingsViewAdminComponent } from '../bookings-view-admin/bookings-view-admin.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-display-port',
  standalone: true,
  imports: [

    RouterOutlet,CommonModule, FormsModule,
    HeaderComponent, DisplayPortComponent, FooterComponent,
    HomeViewComponent,ToursViewComponent,BookingsViewComponent,AuthViewComponent,
    HotelsViewAdminComponent,ToursViewAdminComponent,BookingsViewAdminComponent

  ],
  templateUrl: './display-port.component.html',
  styleUrl: './display-port.component.css'
})
export class DisplayPortComponent {

}
