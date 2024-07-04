import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { HotelService } from '../Services/Hotel/hotel.service';
import { addHotel, IHotel } from '../Models Angular/Hotel';

import 'boxicons'
import { ShortenDescriptionPipe } from '../Pipes/ShortenDescription/shorten-description.pipe';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { HotelActions } from '../State/Actions/hotel.actions';
import { getAllHotelsSelector } from '../State/Selectors/hotel.selector';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-hotels-view-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ShortenDescriptionPipe],
  templateUrl: './hotels-view-admin.component.html',
  styleUrl: './hotels-view-admin.component.css'
})
export class HotelsViewAdminComponent implements OnInit {

  addHotelForm!: FormGroup
  // allHotels: IHotel[] = []

  btnText: string = "Add Hotel";
  hotelId!: string
  isDeleted!: number

  constructor(private fb: FormBuilder, private hotelService: HotelService, private store: Store<AppState>) {
  }

  allHotels$!: Observable<IHotel[]>


  ngOnInit(): void {
    this.addHotelForm = this.fb.group({
      hotelname: this.fb.control(null, Validators.required),
      hotellocation: this.fb.control(null, Validators.required),
      hotelrating: this.fb.control(null, [Validators.required, this.validateNumber.bind(this)])

    })
    // this.hotelService.getAllHotels().subscribe(hotelsArray => {
    //   // console.log(hotelsArray)
    //   this.allHotels = hotelsArray.filter(h => h.isDeleted != 1)
    // })

    this.store.dispatch(HotelActions.get())

    this.allHotels$ = this.store.select(getAllHotelsSelector)

  }

  validateNumber(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (isNaN(value) || value < 1 || value > 5) {
      return { invalidNumber: true };
    }
    return null;
  }

  onSubmit() {
    console.log("Form Submitted");

    let hotelName: string = this.addHotelForm.value.hotelname
    let hotelLocation: string = this.addHotelForm.value.hotellocation
    let hotelRating: string = this.addHotelForm.value.hotelrating

    if (this.btnText === "Add Hotel") {
      console.log("Adding", this.addHotelForm.value)
      //add the new hotel
      let addedHotel: addHotel = {
        hotelname: hotelName,
        hotellocation: hotelLocation,
        hotelrating: +hotelRating
      }
      // this.hotelService.addHotel(addedHotel).subscribe(res => {
      //   console.log(res)
      //   this.ngOnInit()
      // })

      this.store.dispatch(HotelActions.add({ newHotel: this.addHotelForm.value }))

   

    } else if (this.btnText === "Update Hotel") {
      console.log("Updating", this.addHotelForm.value)
      //update the hotel
      let updatedHotel: addHotel = {
        hotelname: hotelName,
        hotellocation: hotelLocation,
        hotelrating: +hotelRating,
      }

      // this.hotelService.updateHotel(updatedHotel, this.hotelId).subscribe(res => {
      //   console.log(res)
      //   this.ngOnInit()
      // })

      this.store.dispatch(HotelActions.update({ updatedHotel, id: this.hotelId }))

    }

  }


  editHotel(index: number) {
    //log the selected hotel
    console.log(index)
    this.btnText = "Update Hotel"

    this.allHotels$.subscribe(hotelsArray => {
      // console.log(hotelsArray)
      // this.isDeleted = hotelsArray[index].isDeleted
      this.hotelId = hotelsArray[index].id

      this.addHotelForm.patchValue({
        hotelname: hotelsArray[index].hotelname,
        hotellocation: hotelsArray[index].hotellocation,
        hotelrating: hotelsArray[index].hotelrating
      })

    })

    // this.btnText = "Update Hotel"
    // this.hotelId = this.allHotels[index].id
    // this.store.dispatch(HotelActions.getSpecificHotel())




    // this.isDeleted = this.allHotels[index].isDeleted
    // //console.log("Selcted Hotel ID", this.hotelId)
    // this.addHotelForm.patchValue({
    //   hotelname: this.allHotels[index].hotelname,
    //   hotellocation: this.allHotels[index].hotellocation,
    //   hotelrating: this.allHotels[index].hotelrating
    // })


  }

  deleteHotel(index: number) {
    //log the selected hotel
    // console.log(this.allHotels[index]) 


    // this.hotelService.deleteHotel(this.hotelId).subscribe(res => {
    //   console.log(res)
    //   this.ngOnInit()
    // })


    this.allHotels$.subscribe(hotelsArray => {
      // console.log(hotelsArray)
      this.hotelId = hotelsArray[index].id
    })

    this.store.dispatch(HotelActions.delete({ id: this.hotelId }))
   
  }
}
