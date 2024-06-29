import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToursService } from '../Services/Tour/tours.service';
import { ITour } from '../Models Angular/Tours';
import { ShortenDescriptionPipe } from '../Pipes/ShortenDescription/shorten-description.pipe';

@Component({
  selector: 'app-tours-view',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,ShortenDescriptionPipe],
  templateUrl: './tours-view.component.html',
  styleUrl: './tours-view.component.css'
})
export class ToursViewComponent implements OnInit{

  
  userToursForm! :FormGroup;
  allTours: ITour[] = []
  // btnText: string = "Add Tour"
  tourId!: string


  constructor(private fb:FormBuilder, private toursService:ToursService) {


  }

  ngOnInit(): void {
  this.userToursForm = this.fb.group({
    // tourID : [null],
    // hotelD: [null],
    tourStartDate: [null, Validators.required],
    tourEndDate: [null, Validators.required],
    guests: [null, Validators.required],
    // collect user data
  });


  this.toursService.getAllTours().subscribe(toursArray => {
    this.allTours = toursArray
   // console.log(this.allTours)
  })






}
  onSubmit() {
    console.log("User Tours Form Submitted")
    console.log(this.userToursForm.value);
   

  }

}
