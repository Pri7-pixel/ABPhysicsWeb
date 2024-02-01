import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskyourdoubtComponent } from './askyourdoubt.component';

describe('AskyourdoubtComponent', () => {
  let component: AskyourdoubtComponent;
  let fixture: ComponentFixture<AskyourdoubtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskyourdoubtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskyourdoubtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
