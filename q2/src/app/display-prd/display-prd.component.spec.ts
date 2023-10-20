import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPrdComponent } from './display-prd.component';

describe('DisplayPrdComponent', () => {
  let component: DisplayPrdComponent;
  let fixture: ComponentFixture<DisplayPrdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayPrdComponent]
    });
    fixture = TestBed.createComponent(DisplayPrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
