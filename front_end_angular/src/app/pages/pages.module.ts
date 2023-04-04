import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { AppBaseComponent } from './app-base/app-base.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TestScreenComponent } from './test-screen/test-screen.component';


@NgModule({
  declarations: [
    HomePageComponent,
    AppBaseComponent,
    SideBarComponent,
    TopBarComponent,
    TestScreenComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
