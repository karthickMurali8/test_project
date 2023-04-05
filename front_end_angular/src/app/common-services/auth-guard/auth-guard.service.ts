import { Inject, Injectable } from '@angular/core';
import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuardService {

//   constructor(
//     private authService: AuthService,
//     private router: Router
//   ) { }

//   canActivate: CanActivateFn = (
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ) => {
//     let loggedIn = this.authService.loggedIn;
//     if(!loggedIn) {
//       this.router.navigate(['']);
//       return false;
//     }
//     return loggedIn;
//   }
// }

export const canActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  let authService = Inject(AuthService);
  let router = Inject(Router);

  let loggedIn = authService.loggedIn;
  if(!loggedIn) {
    router.navigate(['']);
    return false;
  }
  return loggedIn;
}
