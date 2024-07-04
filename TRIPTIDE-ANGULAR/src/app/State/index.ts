import { IBooking } from "../Models Angular/Booking";
import { IHotel } from "../Models Angular/Hotel";
import { ITour } from "../Models Angular/Tours";
import { IUser } from "../Models Angular/User";
import { AuthInterface } from "./Reducers/auth.reducer";
import { HotelInterface } from "./Reducers/hotel.reducer";
import { TourInterface } from "./Reducers/tours.reducer";

export interface AppState{
    auth:AuthInterface
    hotel:HotelInterface
    tour:TourInterface

}