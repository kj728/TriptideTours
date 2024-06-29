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
import { number } from 'joi';

@Component({
  selector: 'app-bookings-view',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ShortenDescriptionPipe],
  templateUrl: './bookings-view.component.html',
  styleUrl: './bookings-view.component.css'
})
export class BookingsViewComponent implements OnInit {

  usersBookings: IBooking[] = []
  user!: Payload
  userId!: string
  tourId!: string
  tourName: string = ' '
  tourDestination!: string
  // userDeets!: IUser
  userName: string = ''



  constructor(
    private fb: FormBuilder,
    private toursService: ToursService,
    private hotelService: HotelService,
    private bookingService: BookingService,
    private authService: AuthenticationService

  ) {

  }
  ngOnInit(): void {
    const userString = localStorage.getItem('currentUser');
    if (userString) {
      this.user = JSON.parse(userString);
    }

    this.bookingService.getAllBookingsUser(this.user.sub).subscribe(userBookingsArray => {
      //console.log(userBookingsArray)
      this.usersBookings = userBookingsArray;
      // Access tourId and hotelId for each booking
      this.usersBookings.forEach(booking => {
        const tourId = booking.tourid;
        const hotelId = booking.hotelid;
        console.log("Tour ID:", tourId);
        console.log("Hotel ID:", hotelId);

        this.toursService.getAllTours().subscribe(res => {
          console.log(res)
          // this.tourName = tour.tourname
          // this.tourDestination = tour.tdestination
        })





      });

    })

    this.userId = this.user.sub
    console.log(this.userId)

    this.authService.getSpecificUser(this.userId).subscribe(res => {
      console.log(res)
      this.userName = res.username;
    })




    // this.toursService.getSpecificTour(this.tourId).subscribe(res => {
    //   console.log(res)
    //   // this.tourName = tour.tourname
    //   // this.tourDestination = tour.tdestination
    // })






  }

  getTour(id: string): number {
    let tourPrice!: number;
    console.log("Getting Tour:", id)
    this.toursService.getSpecificTour(id).subscribe(tour => {
      // console.log(tour)
      // this.tourName = tour.tourname
      // this.tourDestination = tour.tdestination

      tourPrice = tour.tprice
    })
    return tourPrice;
  }
}
