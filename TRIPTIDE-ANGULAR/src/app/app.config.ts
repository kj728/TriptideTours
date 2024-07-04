import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TokenInterceptor } from './Interceptors/token';
import { provideStore } from '@ngrx/store';
import { authReducer } from './State/Reducers/auth.reducer';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './State/Effects/auth.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { hotelReducer } from './State/Reducers/hotel.reducer';
import { HotelsEffects } from './State/Effects/hotels.effects';
import { tourReducer } from './State/Reducers/tours.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([TokenInterceptor])),
    provideStore({ authR: authReducer ,hotelR:hotelReducer,tourR:tourReducer}),
    provideEffects([AuthEffects,HotelsEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
