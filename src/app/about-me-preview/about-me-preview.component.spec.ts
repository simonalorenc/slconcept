import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMePreviewComponent } from './about-me-preview.component';

describe('AboutMePreviewComponent', () => {
  let component: AboutMePreviewComponent;
  let fixture: ComponentFixture<AboutMePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
