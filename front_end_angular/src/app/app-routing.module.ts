import { Inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-signup/login/login.component';
import { canActivate } from './common-services/auth/auth-guard/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    // canActivate: [() => Inject(AuthGuardService).canActivate()],
    // canActivate: [canActivate],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
