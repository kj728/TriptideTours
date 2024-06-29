import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators, FormBuilder } from '@angular/forms';
import { ToursService } from '../Services/Tour/tours.service';
import { addTour, ITour } from '../Models Angular/Tours';
import { ShortenDescriptionPipe } from '../Pipes/ShortenDescription/shorten-description.pipe';
import { updateTour } from '../../../../../TRIPTIDE-SYSTEM/src/Controllers/tourController';

@Component({
  selector: 'app-tours-view-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ShortenDescriptionPipe],
  templateUrl: './tours-view-admin.component.html',
  styleUrl: './tours-view-admin.component.css'
})
export class ToursViewAdminComponent implements OnInit {

  addTourForm!: FormGroup
  allTours: ITour[] = []
  btnText: string = "Add Tour"
  tourId!: string

  constructor(private fb: FormBuilder, private toursService: ToursService) {

  }

  ngOnInit(): void {
    this.addTourForm = this.fb.group({
      tourname: [null, Validators.required],
      tdestination: [null, Validators.required],
      tdescription: [null, Validators.required],
      tprice: [null, [Validators.required, this.validateNumber.bind(this)]],
    });

    this.toursService.getAllTours().subscribe(toursArray => {
      this.allTours = toursArray
     // console.log(this.allTours)
    })

  }




  onSubmit() {
    console.log('Form Submitted')

    if (this.btnText === 'Add Tour') {
      console.log("Adding Tour")
        let newTour: addTour = {
          tourname: this.addTourForm.value.tourname,
          tdestination: this.addTourForm.value.tdestination,
          tdescription: this.addTourForm.value.tdescription,
          tprice: this.addTourForm.value.tprice
        }

        this.toursService.addTour(newTour).subscribe(res => {
          console.log(res)
          this.ngOnInit()
        })


    }else if (this.btnText === 'Update Tour') {
      console.log("Updating Tour")
        let updatedTour: addTour = {
          tourname: this.addTourForm.value.tourname,
          tdestination: this.addTourForm.value.tdestination,
          tdescription: this.addTourForm.value.tdescription,
          tprice: this.addTourForm.value.tprice
        }

        console.log(updatedTour)
        this.toursService.updateTour(updatedTour,this.tourId).subscribe(res => {
          console.log(res)
          this.ngOnInit()
        })

    }

  }



  validateNumber(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (isNaN(value) || value < 1000 || value > 500000) {
      return { invalidNumber: true };
    }
    return null;
  }

  editTour(index: number): void {
    console.log(index)
    console.log(this.allTours[index])
    this.btnText = "Update Tour"
    this.tourId = this.allTours[index].id
    this.addTourForm.patchValue({
      tourname: this.allTours[index].tourname,
      tdestination: this.allTours[index].tdestination,
      tdescription: this.allTours[index].tdescription,
      tprice: this.allTours[index].tprice,
    })
  }

  deleteTour(index:number) {
    console.log(index)

    console.log(this.allTours[index])
    this.tourId= this.allTours[index].id;

    this.toursService.deleteTour(this.tourId).subscribe(res=>{
      console.log(res)
      this.ngOnInit()
    })
  }
}
