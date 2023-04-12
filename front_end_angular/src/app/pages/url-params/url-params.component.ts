import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-url-params',
  templateUrl: './url-params.component.html',
  styleUrls: ['./url-params.component.scss']
})
export class UrlParamsComponent implements OnInit {
  id = 0;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      if(res['id']) {
        this.id = res['id'];
      }
    });
    this.activatedRoute.url.subscribe(res => {
      console.log(res);
    })
  }

}
