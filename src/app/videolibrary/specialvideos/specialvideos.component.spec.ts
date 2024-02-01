import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialvideosComponent } from './specialvideos.component';

describe('SpecialvideosComponent', () => {
  let component: SpecialvideosComponent;
  let fixture: ComponentFixture<SpecialvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialvideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
