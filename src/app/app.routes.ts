import { Routes } from '@angular/router';
import { AppRoutes } from './app-routes.enum';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MainPageComponent } from './main-page/main-page.component';
import { OfferComponent } from './offer/offer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutMeComponent } from './about-me/about-me.component';

export const routes: Routes = [
    { path: AppRoutes.Main, component: MainPageComponent},
    { path: AppRoutes.PrivacyPolicy, component: PrivacyPolicyComponent },
    { path: AppRoutes.Offer, component: OfferComponent },
    { path:AppRoutes.Portfolio, component: PortfolioComponent },
    { path: AppRoutes.AboutMe, component: AboutMeComponent }
    // { path: '**', component: PageNotFoundComponent },
];
