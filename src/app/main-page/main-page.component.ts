import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { PortfolioPreviewComponent } from '../portfolio-preview/portfolio-preview.component';
import { OfferPreviewComponent } from '../offer-preview/offer-preview.component';
import { ContactPreviewComponent } from '../contact-preview/contact-preview.component';
import { OpinionsComponent } from '../opinions/opinions.component';
import { AboutMePreviewComponent } from '../about-me-preview/about-me-preview.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HomeComponent, PortfolioPreviewComponent, OfferPreviewComponent, AboutMePreviewComponent, ContactPreviewComponent, OpinionsComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
