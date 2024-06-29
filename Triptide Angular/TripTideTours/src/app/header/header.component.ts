import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../Services/Authentication/authentication.service';
import { Payload } from '../Models Angular/User';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  user!:Payload
  constructor(public authService:AuthenticationService) {



  }
  ngOnInit(): void {
    const userString = localStorage.getItem('currentUser');
    if (userString) {
      this.user = JSON.parse(userString);

    }
    
  }

  signOutUser(){
    this.authService.signOut()
      // Refresh the page after signout
      window.location.reload();
     
  }
  
  


}
