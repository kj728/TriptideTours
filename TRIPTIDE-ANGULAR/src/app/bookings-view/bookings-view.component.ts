import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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


  userBookingUpdateForm!: FormGroup;
  usersBookings: IBooking[] = [];
  user!: Payload
  userId!: string
  tourId!: string
  hotelId!: string
  userName: string = ''
  allHotels: IHotel[] = []
  filteredHotels: IHotel[] = []
  allTours: ITour[] = []
  tourName: string = ' '
  tourDestination!: string

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

    this.userBookingUpdateForm = this.fb.group({
      bstartdate: [null, Validators.required],
      benddate: [null, Validators.required],
      bhotelindex: [null, Validators.required],
      bguests: [1, [Validators.required, Validators.min(1)]]
    });



    this.userId = this.user.sub
    //console.log(this.userId)

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
      // console.log(allHotelsArray)
    });

    this.toursService.getAllTours().subscribe(allToursArray => {
      this.allTours = allToursArray;
      //console.log(allToursArray)
    });
  }

  getBookedTourName(id: string): string {
    let tourName = '';
    const tour = this.allTours.find(t => t.id === id)
    if (tour) {
      tourName = tour.tourname
    }
    return tourName;
  }

  getBookedHotelName(hotelid: string): string {
    let hotelName = '';
    const hotel = this.allHotels.find(h => h.id === hotelid)
    if (hotel) {
      hotelName = hotel.hotelname
    }
    return hotelName;
  }


  getBookedTourPrice(tourid: string): string {
    let tourPrice = 0;
    const tour = this.allTours.find(t => t.id === tourid)
    if (tour) {
      tourPrice = tour.tprice
    }
    return tourPrice.toString();

  }



  onSubmit() {
    console.log('Form Submitted')
    console.log(this.userBookingUpdateForm.value)
    // let newBooking: IBooking = {
    //   id: '',
    //   userid: this.userId,
    //   tourid: this.tourId,
    //   hotelid: this.filteredHotels[+this.userBookingUpdateForm.value.bhotelindex].id,
    //   bstartdate: this.userBookingUpdateForm.value.bstartdate,
    //   benddate: this.userBookingUpdateForm.value.benddate,
    //   bookingdate: '',
    //   bguests: +this.userBookingUpdateForm.value.bguests,
    //   bstatus: 'Pending',
    //   bEmailSent: 'No',
    //   isDeleted: 0
    // }

  }

  startBookingUpdateProcess(index: number): void {
  
    let booking: IBooking = this.usersBookings[index]
    this.tourName = this.getBookedTourName(booking.tourid)

    this.userBookingUpdateForm.patchValue({
      bstartdate: this.usersBookings[index].bstartdate,
      benddate: this.usersBookings[index].benddate,
      bhotelindex: this.allHotels.findIndex(h => h.id === this.usersBookings[index].hotelid),
      bguests: this.usersBookings[index].bguests

    });

    // this.filteredHotels = this.allHotels.filter(h => h.id === this.usersBookings[index].

    this.tourId = this.usersBookings[index].tourid;
    const tour = this.allTours.find(t => t.id === this.tourId)
    // console.log(tour)
    if(tour){
      this.tourDestination = tour.tdestination
    }
    
    this.hotelId = this.usersBookings[index].hotelid;
    const hotel = this.allHotels.find(h => h.id === this.hotelId)
    console.log(hotel)

    this.filteredHotels = this.allHotels.filter(
      h => h.hotellocation.trim().toLowerCase()
        ===
        this.tourDestination.trim().toString().toLowerCase())
    
       

    // this.tourDestination = this.allTours[index].tdestination;
    // this.tourName = this.allTours[index].tourname;
    //  console.log(this.allTours[index])




  }



}



