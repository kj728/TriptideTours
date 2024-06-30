import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortenDescriptionPipe } from '../Pipes/ShortenDescription/shorten-description.pipe';
import { BookingService } from '../Services/Booking/booking.service';
import { HotelService } from '../Services/Hotel/hotel.service';
import { ToursService } from '../Services/Tour/tours.service';
import { IBooking } from '../Models Angular/Booking';
import { IUser, Payload } from '../Models Angular/User';
import { AuthenticationService } from '../Services/Authentication/authentication.service';

import { ITour } from '../Models Angular/Tours';
import { IHotel } from '../Models Angular/Hotel';

@Component({
  selector: 'app-bookings-view',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ShortenDescriptionPipe],
  templateUrl: './bookings-view.component.html',
  styleUrl: './bookings-view.component.css'
})
export class BookingsViewComponent implements OnInit {

  // usersBookings: IBooking[] = []
  usersBookings: IBooking[] = [];
  user!: Payload
  userId!: string
  tourId!: string
  userName: string = ''
  allHotels: IHotel[] = []
  allTours: ITour[] = []
  count: number = 1

  bookedTours: string[] = [];
  bookedHotels: string[] = [];
  toursPrice: string[] = [];


  constructor(
    private fb: FormBuilder,
    private toursService: ToursService,
    private hotelService: HotelService,
    private bookingService: BookingService,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    const userString = localStorage.getItem('currentUser');
    if (userString) {
      this.user = JSON.parse(userString);
    }

    this.userId = this.user.sub
    console.log(this.userId)

    this.authService.getSpecificUser(this.userId).subscribe(specificUser => {
      // console.log(res)
      this.userName = specificUser.username;
    })

    this.bookingService.getAllBookingsUser(this.userId).subscribe(userBookingsArray => {
      this.usersBookings = userBookingsArray;
      this.bookedTours = this.usersBookings.map(booking => this.getBookedTourName(booking.tourid));
      this.bookedHotels = this.usersBookings.map(booking => this.getBookedHotelName(booking.hotelid));
      this.toursPrice = this.usersBookings.map(booking => this.getBookedTourPrice(booking.tourid));
    });

    this.hotelService.getAllHotels().subscribe(allHotelsArray => {
      this.allHotels = allHotelsArray;
      console.log(allHotelsArray)
    });

    this.toursService.getAllTours().subscribe(allToursArray => {
      this.allTours = allToursArray;
      console.log(allToursArray)
    });
  }

  // getBookedTour(id: string): ITour {
  //   let tour!: ITour;
  //   console.log("Getting Tour:", id)
  //   this.toursService.getSpecificTour(id).subscribe(tour => {
  //     console.log(tour)
  //     tour = tour;
  //   })
  //   return tour;
  // }

  //   getBookedTour(id: string) {
  //     const tour = this.allTours.find(t => t.id === id)
  //     console.log(tour)
  //     // if (!tour) {
  //     //   return null;
  //     // }
  //     // return tour;


  // }


  getBookedTourName(id: string): string {
    let tourName = '';
    const tour = this.allTours.find(t => t.id === id)
    if(tour){
      tourName=tour.tourname
    }
    return tourName;
  }

  getBookedHotelName(hotelid: string): string {
    let hotelName = '';
    const hotel = this.allHotels.find(h => h.id === hotelid)
    if(hotel){
      hotelName=hotel.hotelname
    }
    return hotelName;
  }

  
  getBookedTourPrice(tourid: string): any {
    let tourPrice = 0;
    const tour = this.allTours.find(t => t.id === tourid)
    if(tour){
      tourPrice=tour.tprice
    }
    return tourPrice;
  }
  



}



