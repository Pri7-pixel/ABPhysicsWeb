import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Board11Component } from './board11.component';

describe('Board11Component', () => {
  let component: Board11Component;
  let fixture: ComponentFixture<Board11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Board11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Board11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
