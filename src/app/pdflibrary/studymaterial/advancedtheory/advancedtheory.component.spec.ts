import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedtheoryComponent } from './advancedtheory.component';

describe('AdvancedtheoryComponent', () => {
  let component: AdvancedtheoryComponent;
  let fixture: ComponentFixture<AdvancedtheoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedtheoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedtheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
