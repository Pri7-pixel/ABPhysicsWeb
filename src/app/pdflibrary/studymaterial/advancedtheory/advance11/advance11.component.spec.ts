import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Advance11Component } from './advance11.component';

describe('Advance11Component', () => {
  let component: Advance11Component;
  let fixture: ComponentFixture<Advance11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Advance11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Advance11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
