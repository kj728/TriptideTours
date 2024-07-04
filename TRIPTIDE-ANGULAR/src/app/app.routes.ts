import { Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { AuthViewComponent } from './auth-view/auth-view.component';
import { ToursViewComponent } from './tours-view/tours-view.component';
import { BookingsViewComponent } from './bookings-view/bookings-view.component';
import { ToursViewAdminComponent } from './tours-view-admin/tours-view-admin.component';
import { BookingsViewAdminComponent } from './bookings-view-admin/bookings-view-admin.component';
import { HotelsViewAdminComponent } from './hotels-view-admin/hotels-view-admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './Guards/auth.guard';


export const routes: Routes = [

    { path: '', component: HomeViewComponent }, //Directs to the home component
    {
        path: 'tours',canActivate:[authGuard], children: [
            { path: '', component: ToursViewComponent }, // Directs to the usrer tours component
            { path: 'admin', component: ToursViewAdminComponent } // Directs to the admin tours component

        ]
    },
    {
        path: 'bookings',canActivate:[authGuard], children: [
            { path: '', component: BookingsViewComponent },//Directs to the user bookings component
            { path: 'admin', component: BookingsViewAdminComponent } // Directs to the admin bookings component
        ]
    },
    { path: 'auth', component: AuthViewComponent }, // Directs to the sign up /sign in component
    { path: 'hotels',canActivate:[authGuard], component: HotelsViewAdminComponent }, // Directs to the admin hotels component

    {path: '**', component: NotFoundComponent} // wildcard route incase user types in a rout that exists not


    // { path: '', component: HomeViewComponent }, //Directs to the home component
    // {
    //     path: 'tours', children: [
    //         { path: '', component: ToursViewComponent }, // Directs to the usrer tours component
    //         { path: 'admin', component: ToursViewAdminComponent } // Directs to the admin tours component

    //     ]
    // },
    // {
    //     path: 'bookings', children: [
    //         { path: '', component: BookingsViewComponent },//Directs to the user bookings component
    //         { path: 'admin', component: BookingsViewAdminComponent } // Directs to the admin bookings component
    //     ]
    // },
    // { path: 'auth', component: AuthViewComponent }, // Directs to the sign up /sign in component
    // { path: 'hotels', component: HotelsViewAdminComponent }, // Directs to the admin hotels component

    // { path: '**', component: NotFoundComponent } // wildcard route incase user types in a rout that exists not






];
