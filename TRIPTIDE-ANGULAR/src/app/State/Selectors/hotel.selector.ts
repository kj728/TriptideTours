import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HotelInterface } from "../Reducers/hotel.reducer";

const hotelFeatureSelector = createFeatureSelector<HotelInterface>('hotelR')

export const getAllHotelsSelector = createSelector(
    hotelFeatureSelector,
    (state) => state.allHotels
)
export const hotelIdSelector = createSelector(
    hotelFeatureSelector,
    (state) => state.id
)
export const hotelSelector = createSelector(
    getAllHotelsSelector,
    hotelIdSelector,
    (allHotels,id) => allHotels.filter(h=>h.id === id)
)




