import { Component } from '@angular/core';
import { AppRoutes } from '../app-routes.enum';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-offer-preview',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './offer-preview.component.html',
  styleUrl: './offer-preview.component.scss',
})
export class OfferPreviewComponent {
  offerPath = AppRoutes.Offer;
}
