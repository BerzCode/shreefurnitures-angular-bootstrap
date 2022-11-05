import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeBodyComponent } from './customize-body.component';

describe('CustomizeBodyComponent', () => {
  let component: CustomizeBodyComponent;
  let fixture: ComponentFixture<CustomizeBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizeBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
