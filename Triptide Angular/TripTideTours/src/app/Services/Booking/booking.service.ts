import { Injectable } from '@angular/core';
import { addBooking, IBooking } from '../../Models Angular/Booking';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private readonly BaseURL ="http://localhost:1000/tours/"

  retrievedToken = localStorage.getItem('token') as string

  constructor(private http:HttpClient) { }

  addBooking(newBooking:addBooking):Observable<{message:string}>{
    return this.http.post<{message:string}>(this.BaseURL,newBooking,{
      headers:new HttpHeaders({
        token:this.retrievedToken
      })
    })
  }

  deleteBooking(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(this.BaseURL + id, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }

  getAllBookingsAdmin(): Observable<IBooking[]> {
    return this.http.get<IBooking[]>(this.BaseURL);
  }

  getAllBookingsUser(): Observable<IBooking[]> {
    return this.http.get<IBooking[]>(this.BaseURL);
  }



  
  getSpecificBooking(id: string): Observable<IBooking> {
    return this.http.get<IBooking>(this.BaseURL + id, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }

  updateBooking(updatedBooking: addBooking, id: string): Observable<{ message: string }> {

    return this.http.patch<{ message: string }>(this.BaseURL + id, updatedBooking, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }

}


