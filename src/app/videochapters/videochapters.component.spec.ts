import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideochaptersComponent } from './videochapters.component';

describe('VideochaptersComponent', () => {
  let component: VideochaptersComponent;
  let fixture: ComponentFixture<VideochaptersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideochaptersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideochaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
