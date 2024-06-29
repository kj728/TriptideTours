import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHotel } from '../../Models Angular/Hotel';
import { addHotel } from '../../Models Angular/Hotel';


@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private readonly BaseURL = "http://localhost:1000/hotels/"


  constructor(private http: HttpClient) { }

  retrievedToken = localStorage.getItem('token') as string;

  addHotel(newHotel: addHotel): Observable<{ message: string }> {

    return this.http.post<{ message: string }>(this.BaseURL, newHotel, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }


  deleteHotel(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(this.BaseURL + id, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }


  getAllHotels(): Observable<IHotel[]> {
    return this.http.get<IHotel[]>(this.BaseURL);
  }

  getSpecificHotel(id: string): Observable<IHotel> {
    return this.http.get<IHotel>(this.BaseURL + id, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }


  updateHotel(updatedHotel: addHotel, id: string): Observable<{ message: string }> {

    return this.http.patch<{ message: string }>(this.BaseURL + id, updatedHotel, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }





}
