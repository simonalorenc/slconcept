import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { PortfolioPreviewComponent } from '../portfolio-preview/portfolio-preview.component';
import { OfferComponent } from '../offer/offer.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HomeComponent, PortfolioPreviewComponent, OfferComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
