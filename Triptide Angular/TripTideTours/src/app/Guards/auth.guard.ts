import { CanActivateFn, Router } from '@angular/router';
import { routes } from '../app.routes';
import { inject } from '@angular/core';
import { AuthenticationService } from '../Services/Authentication/authentication.service';


export const authGuard: CanActivateFn = (route, state) => {


  const router =inject(Router)
  const auth = inject(AuthenticationService) 

  if(auth.showStatus()){
    //allow them access
    return true;

  } else {
    //redirect them
    router.navigate(['/auth']);
    return false;
  }

 
};
