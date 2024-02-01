import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found10Component } from './found10.component';

describe('Found10Component', () => {
  let component: Found10Component;
  let fixture: ComponentFixture<Found10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Found10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Found10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
