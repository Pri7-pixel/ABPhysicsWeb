import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JEENEET12Component } from './jee-neet12.component';

describe('JEENEET12Component', () => {
  let component: JEENEET12Component;
  let fixture: ComponentFixture<JEENEET12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JEENEET12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JEENEET12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
