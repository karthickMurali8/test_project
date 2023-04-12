import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { AppBaseComponent } from './app-base/app-base.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TestScreenComponent } from './test-screen/test-screen.component';
import { UrlParamsComponent } from './url-params/url-params.component';
import { ConceptsListComponent } from './concepts-list/concepts-list.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { preventExit } from './personal-info/canDeactivate-personal-info/canDeactivate-personal-info.service';


@NgModule({
  declarations: [
    HomePageComponent,
    AppBaseComponent,
    SideBarComponent,
    TopBarComponent,
    TestScreenComponent,
    UrlParamsComponent,
    ConceptsListComponent,
    PersonalInfoComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ],
  providers: [preventExit]
})
export class PagesModule { }
