import { Component } from '@angular/core';
import { AppRoutes } from '../app-routes.enum';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-offer-preview',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './offer-preview.component.html',
  styleUrl: './offer-preview.component.scss'
})
export class OfferPreviewComponent {
  offerPath = AppRoutes.Offer;
}
