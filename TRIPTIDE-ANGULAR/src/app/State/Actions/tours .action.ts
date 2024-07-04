import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { addTour, AddTourResponse, ITour } from "../../Models Angular/Tours";

export const TourActions= createActionGroup({
    source:'TOURS API',
    events:{

        //adding tours
        'add': props<{newTour:addTour}>(),
        'add success':props<{response:AddTourResponse}>(),
        'add failure':props<{message:string}>(),

        //getting all tours
        'get': emptyProps(),
        'get success':props<{allTours:ITour[]}>(),
        'get failure':props<{message:string}>(),

        //getting specific tour
        'get specificTour':props<{id:string}>(),
        'get specificTour success':props<{tour:ITour}>(),
        'get specificTour failure':props<{message:string}>(),

        //updating tour
        'update': props<{updatedTour:addTour, id:string}>(),
        'update success':props<{response:AddTourResponse}>(),
        'update failure':props<{message:string}>(),

        //deleting a tour
        'delete': props<{id:string}>(),
        'delete success':props<{response:AddTourResponse}>(),
        'delete failure':props<{message:string}>(),

    
    }
})