import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  constructor(
    private router: Router
  ) {

  }

  navigate(path: string) {
    switch(path) {
      case 'home':
        this.router.navigate(['/'])
    }
  }

}
