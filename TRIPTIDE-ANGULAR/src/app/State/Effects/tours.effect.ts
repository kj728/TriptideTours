import { Actions, createEffect } from "@ngrx/effects";
import { ToursService } from "../../Services/Tour/tours.service";


export class TourEffects{
    constructor(private actions$: Actions, private tourService: ToursService){}


    addBlogs$= createEffect(()=>{
        
    })
}