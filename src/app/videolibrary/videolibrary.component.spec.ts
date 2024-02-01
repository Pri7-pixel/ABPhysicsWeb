import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideolibraryComponent } from './videolibrary.component';

describe('VideolibraryComponent', () => {
  let component: VideolibraryComponent;
  let fixture: ComponentFixture<VideolibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideolibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideolibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
