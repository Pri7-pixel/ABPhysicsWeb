import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfchaptersComponent } from './pdfchapters.component';

describe('PdfchaptersComponent', () => {
  let component: PdfchaptersComponent;
  let fixture: ComponentFixture<PdfchaptersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfchaptersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfchaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
