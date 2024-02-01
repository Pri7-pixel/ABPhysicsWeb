import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class12Component } from './class12.component';

describe('Class12Component', () => {
  let component: Class12Component;
  let fixture: ComponentFixture<Class12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Class12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Class12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
