import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToursService } from '../Services/Tour/tours.service';
import { ITour } from '../Models Angular/Tours';
import { ShortenDescriptionPipe } from '../Pipes/ShortenDescription/shorten-description.pipe';
import { Payload } from '../Models Angular/User';
import { HotelService } from '../Services/Hotel/hotel.service';
import { IHotel } from '../Models Angular/Hotel';
import { addBooking } from '../Models Angular/Booking';
import { BookingService } from '../Services/Booking/booking.service';

@Component({
  selector: 'app-tours-view',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ShortenDescriptionPipe],
  templateUrl: './tours-view.component.html',
  styleUrl: './tours-view.component.css'
})
export class ToursViewComponent implements OnInit {


  userToursBookingForm!: FormGroup;
  allTours: ITour[] = []
  allHotels: IHotel[] = []
  filteredHotels: IHotel[] = []

  // btnText: string = "Add Tour"
  user!: Payload
  userId!: string
  tourId!: string
  tourName: string = ' '
  tourDestination!: string
  constructor(private fb: FormBuilder, private toursService: ToursService, private hotelService: HotelService, private bookingService: BookingService) {


  }

  ngOnInit(): void {
    const userString = localStorage.getItem('currentUser');
    if (userString) {
      this.user = JSON.parse(userString);

    }
    this.userToursBookingForm = this.fb.group({
      bstartdate: [null, Validators.required],
      benddate: [null, Validators.required],
      bhotelindex: [null, Validators.required],
      bguests: [1, [Validators.required, Validators.min(1)]]
    });

    this.toursService.getAllTours().subscribe(toursArray => {
      this.allTours = toursArray
      // console.log(this.allTours)
    })

    this.hotelService.getAllHotels().subscribe(hotelsArray => {
      // console.log(hotelsArray)
      this.allHotels = hotelsArray.filter(h => h.isDeleted != 1)
    })

  }

  startBookingProcess(index: number) {
    console.log(index)
    this.userId = this.user.sub;
    this.tourId = this.allTours[index].id;
    this.tourDestination = this.allTours[index].tdestination;
    this.tourName = this.allTours[index].tourname;
    // console.log(this.allTours[index])
    console.log(this.userId)
    console.log(this.tourId)
    // console.log(this.tourDestination)
    this.filteredHotels = this.allHotels.filter(
      h => h.hotellocation.trim().toString().toLowerCase() ===
        this.tourDestination.trim().toString().toLowerCase()
    )
    // console.log("All",this.allHotels)
    // console.log("Filtered",this.filteredHotels)



  }

  onSubmit() {
    console.log("Form Submitted")
    console.log(this.userToursBookingForm.value);

    // userid: string,
    // tourid: string,
    // hotelid: string,
    // bstartdate: string,
    // benddate: string,
    // bookingdate: string,
    // bguests: number,
    // bstatus: string,
    // bEmailSent: number,
    const today = new Date();
    const formattedDate = today.toISOString().slice(0, 10);
   // console.log(formattedDate); // Output: yyyy-mm-dd

    let addedBooking: addBooking = {
      userid: this.userId,
      tourid: this.tourId,
      hotelid: this.filteredHotels[+this.userToursBookingForm.value.bhotelindex].id,
      bstartdate: this.userToursBookingForm.value.bstartdate,
      benddate: this.userToursBookingForm.value.benddate,
      bookingdate: formattedDate,
      bguests: +this.userToursBookingForm.value.bguests,
      bstatus: "Pending",
      bEmailSent: 0
    }

    // console.log(newBooking)

    this.bookingService.addBooking(addedBooking).subscribe(res => {
      console.log(res);
      this.ngOnInit()
    })

  }



}
