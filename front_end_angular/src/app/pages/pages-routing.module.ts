import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AppBaseComponent } from './app-base/app-base.component';
import { TestScreenComponent } from './test-screen/test-screen.component';
import { UrlParamsComponent } from './url-params/url-params.component';
import { ConceptsListComponent } from './concepts-list/concepts-list.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { preventExit } from './personal-info/canDeactivate-personal-info/canDeactivate-personal-info.service';

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
      },
      {
        path: 'products-list',
        component: ConceptsListComponent,
        children: [
          {
            path: 'details/:id',
            component: UrlParamsComponent
          }
        ]
      },
      {
        path: 'personal-info',
        component: PersonalInfoComponent,
        canDeactivate: [preventExit]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
