import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addTour, ITour } from '../../Models Angular/Tours'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  private readonly BaseURL ="http://localhost:1000/tours/"

  retrievedToken = localStorage.getItem('token') as string
  constructor(private http:HttpClient) { }

  addTour(newTour:addTour):Observable<{message:string}>{
    return this.http.post<{message:string}>(this.BaseURL,newTour,{
      headers:new HttpHeaders({
        token:this.retrievedToken
      })
    })
  }

  
  deleteTour(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(this.BaseURL + id, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }

  getAllTours(): Observable<ITour[]> {
    return this.http.get<ITour[]>(this.BaseURL);
  }

  
  getSpecificTour(id: string): Observable<ITour> {
    return this.http.get<ITour>(this.BaseURL + id, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }

  
  updateTour(updatedHotel: addTour, id: string): Observable<{ message: string }> {

    return this.http.patch<{ message: string }>(this.BaseURL + id, updatedHotel, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }



}
