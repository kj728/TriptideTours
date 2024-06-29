import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TokenInterceptor } from './Interceptors/token';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(
    withInterceptors([TokenInterceptor])
  )]
};
