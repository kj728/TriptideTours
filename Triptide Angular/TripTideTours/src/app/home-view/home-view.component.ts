import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { DisplayPortComponent } from '../display-port/display-port.component';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    HeaderComponent, DisplayPortComponent, FooterComponent,
    HomeViewComponent,RouterModule

  ],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent {

  constructor(){
    
  }

}
