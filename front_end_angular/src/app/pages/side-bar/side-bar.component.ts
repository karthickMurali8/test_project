import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  navigate(path: string) {
    switch(path) {
      case 'home':
        this.router.navigate(['/app/home']);
        break;
      case 'personal-info':
        this.router.navigate(['/app/personal-info']);
    }
  }

}
