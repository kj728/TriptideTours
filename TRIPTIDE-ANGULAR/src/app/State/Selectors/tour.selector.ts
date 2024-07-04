import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TourInterface } from "../Reducers/tours.reducer";


const tourFeatureSelector= createFeatureSelector<TourInterface>('tourR')

export const allToursSelector = createSelector(tourFeatureSelector, (state) => state.allTours)

export const tourIdSelector = createSelector(tourFeatureSelector, (state) => state.id)

export const tourSelector = createSelector(
    allToursSelector, tourIdSelector,
     (allTours, id) => allTours.filter(t => t.id === id)
    )


