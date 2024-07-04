import { createAction, createActionGroup, props } from "@ngrx/store";
import { IUser, SignInResponse, SignInRequest, SignUpResponse } from '../../Models Angular/User';


export const AuthActions = createActionGroup({
    source:'AUTH API',
    events:{
        //sign in actions
        'signin':props<{user:SignInRequest}>(),
        'signin success':props<{response:SignInResponse}>(),
        'signin failure':props<{message:string}>(),

        //sign up actions
        'signup':props<{user:IUser}>(),
        'signup success':props<{response:SignUpResponse}>(),
        'signup failure':props<{message:string}>()
    }
})

