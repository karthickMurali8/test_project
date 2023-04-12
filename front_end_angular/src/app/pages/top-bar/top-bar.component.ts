import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common-services/auth/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  constructor(
    private auth : AuthService,
    private router : Router
  ) {

  }

  logout() {
    this.auth.loggedIn = false;
    this.router.navigate(['login']);
  }

}
