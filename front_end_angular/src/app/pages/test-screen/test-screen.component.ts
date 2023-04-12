import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-screen',
  templateUrl: './test-screen.component.html',
  styleUrls: ['./test-screen.component.scss']
})
export class TestScreenComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
  }

}
