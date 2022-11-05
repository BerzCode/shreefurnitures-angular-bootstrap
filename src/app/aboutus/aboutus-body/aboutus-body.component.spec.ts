import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusBodyComponent } from './aboutus-body.component';

describe('AboutusBodyComponent', () => {
  let component: AboutusBodyComponent;
  let fixture: ComponentFixture<AboutusBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutusBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
