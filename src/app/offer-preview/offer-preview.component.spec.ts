import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferPreviewComponent } from './offer-preview.component';

describe('OfferComponent', () => {
  let component: OfferPreviewComponent;
  let fixture: ComponentFixture<OfferPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OfferPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
