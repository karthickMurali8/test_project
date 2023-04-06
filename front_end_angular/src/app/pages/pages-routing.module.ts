import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AppBaseComponent } from './app-base/app-base.component';
import { TestScreenComponent } from './test-screen/test-screen.component';

const routes: Routes = [
  {
    path: '',
    component: AppBaseComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: 'test-screen',
        component: TestScreenComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
