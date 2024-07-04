import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { addHotel, AddHotelResponse, DeleteHotelResponse, IHotel, UpdateHotelResponse } from "../../Models Angular/Hotel";

export const HotelActions = createActionGroup({
    source:'HOTELS API',
    events:{
        //adding hotels
        'add': props<{newHotel:addHotel}>(),
        'add success': props<{response:AddHotelResponse}>(),
        'add failure': props<{message:string}>(),

        //getting hotels
        'get': emptyProps(),
        'get success': props<{allHotels:IHotel[]}>(),
        'get failure': props<{message:string}>(),

        //get single hotel
        'get specificHotel':props<{id:string}>(),
        'get specificHotel success':props<{hotel:IHotel}>(),
        'get specificHotel failure':props<{message:string}>(),


        //updating hotels
        'update': props<{updatedHotel:addHotel, id:string}>(),
        'update success': props<{response:UpdateHotelResponse}>(),
        'update failure': props<{message:string}>(),

        //deleting a hotel
        'delete': props<{id:string}>(),
        'delete success': props<{response:DeleteHotelResponse}>(),
        'delete failure': props<{message:string}>(),









       
    }
})