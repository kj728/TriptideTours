import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthenticationService } from '../Services/Authentication/authentication.service';
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-auth-view',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './auth-view.component.html',
  styleUrl: './auth-view.component.css'
})
export class AuthViewComponent implements OnInit {

  signUpForm!: FormGroup;
  signInForm!: FormGroup;
  UIsuccessMessage!: string;
  UIerrorMessage!: string;


  constructor(private fb: FormBuilder, private auth: AuthenticationService, private router: Router) {

  }
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: this.fb.control(null, Validators.required),
      uemail: this.fb.control(null, [Validators.required, Validators.email]),
      upassword: this.fb.control(null, [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$')])

    })

    this.signInForm = this.fb.group({
      uemail: this.fb.control(null, [Validators.required, Validators.email]),
      upassword: this.fb.control(null, [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$')])

    })


  }

  // signUpForm!: FormGroup
  // signInForm!: FormGroup

  onSubmit(formType: string) {
    //console.log("Form Submitted")

    if (formType === 'SIGNUP') {
      console.log("Sign Up Form Submitted")
      //console.log(this.signUpForm.value)

      this.auth.signUpUser(this.signUpForm.value).subscribe(res => {
        console.log(res.message)

        this.UIsuccessMessage = res.message;
      }, error => {
    
        this.UIerrorMessage = error.error.message;
      })


    } else if (formType === 'SIGNIN') {
      console.log("Sign In Form Submitted")
     // console.log(this.signInForm.value)

      this.auth.signInUser(this.signInForm.value).subscribe(res => {
        console.log(res.message)
        this.UIsuccessMessage = res.message;
        // console.log(res.token)
        localStorage.setItem('token', res.token)
        // console.log(res.payload)
        localStorage.setItem('currentUser', JSON.stringify(res.payload));


        // Navigate to home page after sign-in and refresh
        this.router.navigate(['']).then(() => {
          window.location.reload();
        });

      }, error => {
       
        this.UIerrorMessage = error.error.message;

        
      })

    }

  }








}
