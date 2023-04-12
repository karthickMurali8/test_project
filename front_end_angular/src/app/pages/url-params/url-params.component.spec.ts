import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlParamsComponent } from './url-params.component';

describe('UrlParamsComponent', () => {
  let component: UrlParamsComponent;
  let fixture: ComponentFixture<UrlParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlParamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
