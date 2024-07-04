import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HotelService } from "../../Services/Hotel/hotel.service";
import { HotelActions } from "../Actions/hotel.actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { Injectable } from '@angular/core';


@Injectable()
export class HotelsEffects {
    constructor(private action$: Actions, private hotelServ: HotelService) { }

    addHotel$ = createEffect(() => {
        return this.action$.pipe(
            ofType(HotelActions.add),
            mergeMap(({ newHotel }) => this.hotelServ.addHotel(newHotel).pipe(
                map(response => HotelActions.addSuccess({ response })),
                catchError(error => of(HotelActions.addFailure({ message: error.error.message })))
            ))
        )
    })

    getHotels$ = createEffect(() => {
        return this.action$.pipe(
            ofType(HotelActions.get),
            mergeMap(() => this.hotelServ.getAllHotels().pipe(
                map(response => HotelActions.getSuccess({ allHotels: response })),
                catchError(error => of(HotelActions.getFailure({ message: error.error.message })))
            ))
        )
    })

    getHotel$ = createEffect(() => {
        return this.action$.pipe(
            ofType(HotelActions.update),
            mergeMap(() => this.hotelServ.getAllHotels().pipe(
                map(response => HotelActions.getSuccess({ allHotels: response})),
                catchError(error => of(HotelActions.getFailure({ message: error.error.message })))
            ))
        )
    })




    updateHotel$ = createEffect(() => {
        return this.action$.pipe(
            ofType(HotelActions.update),
            mergeMap(({ updatedHotel, id }) => this.hotelServ.updateHotel(updatedHotel, id).pipe(
                map(response => HotelActions.addSuccess({ response })),
                catchError(error => of(HotelActions.addFailure({ message: error.error.message })))
            ))
        )
    })

    
    deleteHotel$ = createEffect(() => {
        return this.action$.pipe(
            ofType(HotelActions.delete),
            mergeMap(({ id }) => this.hotelServ.deleteHotel( id).pipe(
                map(response => HotelActions.deleteSuccess({ response })),
                catchError(error => of(HotelActions.deleteFailure({ message: error.error.message })))
            ))
        )
    })




}