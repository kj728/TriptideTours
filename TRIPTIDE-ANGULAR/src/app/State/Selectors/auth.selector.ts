import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthInterface } from "../Reducers/auth.reducer";

const authSelectorFeature = createFeatureSelector<AuthInterface>('authR')

export const errorSelectorSI =createSelector(authSelectorFeature,(state)=>state.signInErrorMessage)
export const successSelectorSI = createSelector(authSelectorFeature,(state)=>state.signInSuccessMessage)

export const errorSelectorSU =createSelector(authSelectorFeature,(state)=>state.signUpErrorMessage)
export const successSelectorSU = createSelector(authSelectorFeature,(state)=>state.signUpSuccessMessage)
