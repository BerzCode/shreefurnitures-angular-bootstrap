import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingroomBodyComponent } from './livingroom-body.component';

describe('LivingroomBodyComponent', () => {
  let component: LivingroomBodyComponent;
  let fixture: ComponentFixture<LivingroomBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivingroomBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivingroomBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
