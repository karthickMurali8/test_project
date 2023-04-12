import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-concepts-list',
  templateUrl: './concepts-list.component.html',
  styleUrls: ['./concepts-list.component.scss']
})
export class ConceptsListComponent {

  Products: any[] = [
    {
      no : 1,
      name: 'URL Route Params',
      id: 1
    },
    {
      no : 2,
      name: 'Nested/Child Routes',
      id: 2
    }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  navigate(id : number) {
    this.router.navigate(['details', id], { relativeTo: this.route });
  }

}
