import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Advance12Component } from './advance12.component';

describe('Advance12Component', () => {
  let component: Advance12Component;
  let fixture: ComponentFixture<Advance12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Advance12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Advance12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
