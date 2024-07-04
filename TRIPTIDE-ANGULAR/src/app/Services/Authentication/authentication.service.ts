import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser, SignInRequest, SignInResponse, SignUpResponse } from '../../Models Angular/User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly Base_URL = "http://localhost:1000/auth/"
  private isSignedin = false;
  retrievedToken = localStorage.getItem('token') as string

  constructor(private http: HttpClient) {

  }

  signUpUser(newUser: IUser): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(this.Base_URL + "signup", newUser);
  }

  signInUser(userCredentials: SignInRequest): Observable<SignInResponse> {
    return this.http.post<SignInResponse>(this.Base_URL + "signin", userCredentials);
  }

  showStatus() {
    const token = localStorage.getItem('token') as string

    if (token) {
      //this.isSignedin = true
      return true
    }
    // this.isSignedin = false
    return false
  }

  signOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('currentUser')
    // this.isSignedin = false
    return true;
  }

  getSpecificUser(id: string): Observable<IUser> {
    return this.http.get<IUser>(this.Base_URL + id, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }

}
