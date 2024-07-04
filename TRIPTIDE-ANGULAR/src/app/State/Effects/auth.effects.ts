import { Injectable } from "@angular/core";
import { AuthenticationService } from "../../Services/Authentication/authentication.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthActions } from "../Actions/auth.actions";
import { catchError, concatMap, exhaustMap, map, of } from "rxjs";
import { Router } from "@angular/router";


@Injectable()
export class AuthEffects {
    constructor(private action$: Actions, private authServ: AuthenticationService, private router: Router) { }


    signUpUser$ = createEffect(() => {
        return this.action$.pipe(
            //filtering all actions and listening to the register action
            ofType(AuthActions.signup),
            //receiving input from the action and reaching out to the service
            concatMap(req => this.authServ.signUpUser(req.user).pipe(
                map(signUpResponse => AuthActions.signupSuccess({ response: signUpResponse })),
                catchError(error => of(AuthActions.signupFailure({ message: error })))
            ))
        )
    })

    signInUser$ = createEffect(() => {
        return this.action$.pipe(
            ofType(AuthActions.signin),
            exhaustMap(req => this.authServ.signInUser(req.user).pipe(
                map(signInResponse => {
                    //add token  to local storage 
                    localStorage.setItem('token', signInResponse.token)
                    // add payload to local storage
                    localStorage.setItem('currentUser', JSON.stringify(signInResponse.payload));
                    // navigate to home page after sign-in

                    setTimeout(() => {
                        this.router.navigate(['']).then(() => {
                              window.location.reload();
                        });
                    }, 1500)


                    // return action with signin success
                    return AuthActions.signinSuccess({ response: signInResponse })
                }),
                catchError(error => of(AuthActions.signinFailure({ message: error })))
            ))
        )
    })
}