import { createReducer, on } from "@ngrx/store";
import { IHotel } from "../../Models Angular/Hotel";
import { HotelActions } from "../Actions/hotel.actions";

export interface HotelInterface {
    id: string; //get a hotel

    allHotels: IHotel[] //get all blogs
    allHotelsError: string
    allHotelsLoading: boolean

    addHotelSuccessMessage: string; //add hotels messages
    addHotelErrorMessage: string;
    addHotelLoading: boolean;

    updateHotelSuccessMessage: string; //update hotels messages
    updateHotelErrorMessage: string;
    updateHotelLoading: boolean;

    deleteHotelSuccessMessage:string,//delete hotels messages
    deleteHotelErrorMessage:string,
    deleteHotelLoading: boolean,


}


const initialState: HotelInterface = {
    id: '',

    allHotels: [],
    allHotelsError: '',
    allHotelsLoading: false,

    addHotelSuccessMessage: '',
    addHotelErrorMessage: '',
    addHotelLoading: false,
    
    updateHotelSuccessMessage: '',
    updateHotelErrorMessage: '',
    updateHotelLoading: false,
    

    deleteHotelSuccessMessage: '',
    deleteHotelErrorMessage: '',
    deleteHotelLoading: false,


}

export const hotelReducer = createReducer(
    initialState,
    //for add hotel
    on(HotelActions.add, (state) => {
        return {
            ...state,
            addHotelSuccessMessage: '',
            addHotelErrorMessage: '',
            addHotelLoading: true
        }
    }),
    on(HotelActions.addSuccess, (state, { response }) => {
        return {
            ...state,
            addHotelSuccessMessage: response.message,
            addHotelErrorMessage: '',
            addHotelLoading: false
        }
    }),
    on(HotelActions.addFailure, (state, { message }) => {
        return {
            ...state,
            addHotelSuccessMessage: '',
            addHotelErrorMessage: message,
            addHotelLoading: false
        }
    }),

    //for get all hotels
    on(HotelActions.get, (state) => {
        return {
            ...state,
            allHotels: [],
            allHotelsError: '',
            allHotelsLoading: true
        }
    
    }),on(HotelActions.getSuccess, (state,{allHotels}) => {
        return {
            ...state,
            allHotels: allHotels ,
            allHotelsError: '',
            allHotelsLoading: true
        }
    })
    ,on(HotelActions.getFailure, (state,{message}) => {
        return {
            ...state,
            allHotels: [],
            allHotelsError: message,
            allHotelsLoading: true
        }
    }),

   // for getting a single hotel
  
    on(HotelActions.getSpecificHotel, (state,{id}) => {
        return {
            ...state,
            id:id
        }
    }),
  

    //for updating hotels
    on(HotelActions.update, (state) => {
        return {
            ...state,
            updateHotelSuccessMessage: '',
            updateHotelErrorMessage: '',
            updateHotelLoading: true
        }
    }),
    on(HotelActions.updateSuccess, (state, { response }) => {
        return {
            ...state,
            updateHotelSuccessMessage: response.message,
            updateHotelErrorMessage: '',
            updateHotelLoading: false
        }
    }),
    on(HotelActions.updateFailure, (state, { message }) => {
        return {
            ...state,
            updateHotelSuccessMessage: '',
            updateHotelErrorMessage: message,
            updateHotelLoading: false
        }
    }),

    //for deleting a hotel
    on(HotelActions.delete, (state) => {
        return {
            ...state,
            updateHotelSuccessMessage: '',
            updateHotelErrorMessage: '',
            updateHotelLoading: true
        }
    }),
    on(HotelActions.deleteSuccess, (state, { response }) => {
        return {
            ...state,
            updateHotelSuccessMessage: response.message,
            updateHotelErrorMessage: '',
            updateHotelLoading: false
        }
    }),
    on(HotelActions.deleteFailure, (state, { message }) => {
        return {
            ...state,
            updateHotelSuccessMessage: '',
            updateHotelErrorMessage: message,
            updateHotelLoading: false
        }
    })
   




)