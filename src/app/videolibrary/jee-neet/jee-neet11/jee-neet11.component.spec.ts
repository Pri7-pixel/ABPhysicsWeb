import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JEENEET11Component } from './jee-neet11.component';

describe('JEENEET11Component', () => {
  let component: JEENEET11Component;
  let fixture: ComponentFixture<JEENEET11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JEENEET11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JEENEET11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
