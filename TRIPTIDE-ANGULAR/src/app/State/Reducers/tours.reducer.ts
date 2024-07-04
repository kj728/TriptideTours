import { createReducer, on, } from '@ngrx/store';

import { ITour } from '../../Models Angular/Tours';
import { TourActions } from '../Actions/tours .action';

export interface TourInterface {
    id: string;

    allTours: ITour[],
    allToursError: string,
    allToursLoading: boolean,

    addTourSuccessMessage: string,
    addTourErrorMessage: string,
    addTourLoading: boolean,

    updateTourSuccessMessage: string,
    updateTourErrorMessage: string,
    updateTourLoading: boolean,

    deleteTourSuccessMessage: string,
    deleteTourErrorMessage: string
    deleteTourLoading: boolean


}

const initialState: TourInterface = {
    id: '',

    allTours: [],
    allToursError: '',
    allToursLoading: false,

    addTourSuccessMessage: '',
    addTourErrorMessage: '',
    addTourLoading: false,

    updateTourSuccessMessage: '',
    updateTourErrorMessage: '',
    updateTourLoading: false,

    deleteTourSuccessMessage: '',
    deleteTourErrorMessage: '',
    deleteTourLoading: false,
}

export const tourReducer = createReducer(
    initialState,
    //for getting all tours
    on(TourActions.add, (state) => {
        return {
            ...state,
            addTourSuccessMessage: '',
            addTourErrorMessage: '',
        }
    }),
    on(TourActions.addSuccess, (state, { response }) => {
        return {
            ...state,
            addTourSuccessMessage: response.message,
            addTourErrorMessage: '',
        }

    }),

    on(TourActions.addFailure, (state, { message }) => {
        return {
            ...state,
            addTourSuccessMessage: '',
            addTourErrorMessage: message,
        }
    }),

    //for getting all tours
    on(TourActions.get, (state) => {
        return {
            ...state,
            allTours: [],
            allToursError: '',
            allToursLoading: true
        }
    }),
    on(TourActions.getSuccess, (state, { allTours }) => {
        return {
            ...state,
            allTours: allTours,
            allToursError: '',
            allToursLoading: false
        }
    }),
    on(TourActions.getFailure, (state, { message }) => {
        return {
            ...state,
            allTours: [],
            allToursError: message,
            allToursLoading: false
        }
    }),


    on(TourActions.getSpecificTour, (state, { id }) => {
        return {
            ...state,
            specificTour: {},
            specificTourError: '',
            specificTourLoading: true
        }
    }),
    on(TourActions.getSpecificTourSuccess, (state, { tour }) => {
        return {
           ...state,
            specificTour: tour,
            specificTourError: '',
            specificTourLoading: true
        }
    }),
    on(TourActions.getSpecificTourFailure, (state, { message }) => {
        return {
           ...state,
            specificTour: {},
            specificTourError: message,
            specificTourLoading: true
        }
    }),

    //for updating tours
    on(TourActions.update, (state, { updatedTour, id }) => {
        return {
            ...state,
            updateTourSuccessMessage: '',
            updateTourErrorMessage: '',
            updateTourLoading: true
        }
    }),
    on(TourActions.updateSuccess, (state, { response }) => {
        return {
            ...state,
            updateTourSuccessMessage: response.message,
            updateTourErrorMessage: '',
            updateTourLoading: false
        }
    }),
    on(TourActions.updateFailure, (state, { message }) => {
        return {
            ...state,
            updateTourSuccessMessage: '',
            updateTourErrorMessage: message,
            updateTourLoading: false
        }
    }),

    //for deleting tours
    on(TourActions.delete, (state, { id }) => {
        return {
            ...state,
            deleteTourSuccessMessage: '',
            deleteTourErrorMessage: '',
            deleteTourLoading: true
        }
    }),
    on(TourActions.deleteSuccess, (state, { response }) => {
        return {
            ...state,
            deleteTourSuccessMessage: response.message,
            deleteTourErrorMessage: '',
            deleteTourLoading: false
        }
    }),
    on(TourActions.deleteFailure, (state, { message }) => {
        return {
            ...state,
            deleteTourSuccessMessage: '',
            deleteTourErrorMessage: message,
            deleteTourLoading: false
        }
    }),
)
















