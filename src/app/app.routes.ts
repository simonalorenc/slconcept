import { Routes } from '@angular/router';
import { AppRoutes } from './app-routes.enum';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MainPageComponent } from './main-page/main-page.component';
import { OfferComponent } from './offer/offer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: AppRoutes.PrivacyPolicy, component: PrivacyPolicyComponent },
  { path: AppRoutes.Offer, component: OfferComponent },
  {
    path: AppRoutes.Portfolio,
    component: PortfolioComponent,
  },
  {
    path: `${AppRoutes.Portfolio}/:id`,
    component: PortfolioDetailComponent,
  },
  { path: AppRoutes.AboutMe, component: AboutMeComponent },
  { path: AppRoutes.Main, component: MainPageComponent },
  { path: '**', component: PageNotFoundComponent },
];
