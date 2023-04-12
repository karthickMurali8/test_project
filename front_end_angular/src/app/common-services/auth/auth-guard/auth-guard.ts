import { Injectable, inject } from '@angular/core';
import { CanActivate, CanActivateFn, CanDeactivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
// depreciated - but will work
// export class AuthGuardService implements CanActivate {

//   constructor(
//     private authService: AuthService,
//     private router: Router
//   ) { }

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ) {
//     let loggedIn = this.authService.loggedIn;
//     if(!loggedIn) {
//       this.router.navigate(['']);
//       return false;
//     }
//     return loggedIn;
//   }
// }
export class AuthGuardService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => {
    let loggedIn = this.authService.loggedIn;
    if(!loggedIn) {
      this.router.navigate(['']);
      return false;
    }
    return loggedIn;
  }

  canDeactivate: CanDeactivateFn<boolean> = () => {
    return true;
  }
}

// Also works
// export const canActivate: CanActivateFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ) => {
//   let authService = inject(AuthService);
//   let router = inject(Router);

//   let loggedIn = authService.loggedIn;
//   if(!loggedIn) {
//     router.navigate(['login']);
//     return false;
//   }
//   return loggedIn;
// }
