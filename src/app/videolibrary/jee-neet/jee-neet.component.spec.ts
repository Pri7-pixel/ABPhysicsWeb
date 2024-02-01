import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JEENEETComponent } from './jee-neet.component';

describe('JEENEETComponent', () => {
  let component: JEENEETComponent;
  let fixture: ComponentFixture<JEENEETComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JEENEETComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JEENEETComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
