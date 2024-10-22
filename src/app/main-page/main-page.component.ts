import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { PortfolioPreviewComponent } from '../portfolio-preview/portfolio-preview.component';
import { OfferPreviewComponent } from '../offer-preview/offer-preview.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ContactPreviewComponent } from '../contact-preview/contact-preview.component';
import { OpinionsComponent } from '../opinions/opinions.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HomeComponent, PortfolioPreviewComponent, OfferPreviewComponent, AboutMeComponent, ContactPreviewComponent, OpinionsComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
