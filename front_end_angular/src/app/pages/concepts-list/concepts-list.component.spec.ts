import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptsListComponent } from './concepts-list.component';

describe('ConceptsListComponent', () => {
  let component: ConceptsListComponent;
  let fixture: ComponentFixture<ConceptsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
