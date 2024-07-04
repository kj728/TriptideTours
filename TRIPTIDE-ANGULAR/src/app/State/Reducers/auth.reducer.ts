import { createReducer, on } from "@ngrx/store";
import { AuthActions } from "../Actions/auth.actions";


export interface AuthInterface {
    signInSuccessMessage: string;
    signInErrorMessage: string;
    signInLoading: boolean;

    signUpSuccessMessage: string;
    signUpErrorMessage: string;
    signUpLoading: boolean

}

const initialState: AuthInterface = {
    signInSuccessMessage: '',
    signInErrorMessage: '',
    signInLoading: false,

    signUpSuccessMessage: '',
    signUpErrorMessage: '',
    signUpLoading: false
}

export const authReducer =createReducer (
    initialState,
    //for sign in
    on(AuthActions.signin,(state)=>{
        return {
           ...state,
            signInSuccessMessage: '',
            signInErrorMessage: '',
            signInLoading: true
        }
    }),
    on(AuthActions.signinSuccess,(state,{response})=>{
        return { 
            // of you have a spinner you can now hide it (kale kastuff kanazungukaga...)
           ...state,
            signInSuccessMessage:response.message,
            signInErrorMessage: '',
            signInLoading: false
        }
    }),
    on(AuthActions.signinFailure,(state, {message})=>{
        return {
           ...state,
            signInSuccessMessage: message,
            signInErrorMessage: '',
            signInLoading: true
        }
    }),

    //for sign up
    on(AuthActions.signup,(state)=>{
        return {
           ...state,
            signUpSuccessMessage: '',
            signUpErrorMessage: '',
            signUpLoading: true
        }
    }),
    on(AuthActions.signupSuccess,(state,{response})=>{
        return { 
            // of you have a spinner you can now hide it (kale kastuff kana-zungukaga...)
           ...state,
            signUpSuccessMessage: response.message,
            signUpErrorMessage: '',
            signUpLoading: false
        }
    }),
    on(AuthActions.signupFailure,(state, {message})=>{
        return {
           ...state,
            signUpSuccessMessage: '',
            signUpErrorMessage: message,
            signUpLoading: true
        }
    }),


)
