import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedroomComfortComponent } from './bedroom-comfort.component';

describe('BedroomComfortComponent', () => {
  let component: BedroomComfortComponent;
  let fixture: ComponentFixture<BedroomComfortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedroomComfortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BedroomComfortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
