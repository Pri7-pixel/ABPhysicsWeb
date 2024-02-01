import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdflibraryComponent } from './pdflibrary.component';

describe('PdflibraryComponent', () => {
  let component: PdflibraryComponent;
  let fixture: ComponentFixture<PdflibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdflibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdflibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
