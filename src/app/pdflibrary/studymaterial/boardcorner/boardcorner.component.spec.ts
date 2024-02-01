import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardcornerComponent } from './boardcorner.component';

describe('BoardcornerComponent', () => {
  let component: BoardcornerComponent;
  let fixture: ComponentFixture<BoardcornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardcornerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardcornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
