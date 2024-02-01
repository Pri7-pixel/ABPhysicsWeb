import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomworkComponent } from './classroomwork.component';

describe('ClassroomworkComponent', () => {
  let component: ClassroomworkComponent;
  let fixture: ComponentFixture<ClassroomworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassroomworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
