import { Routes } from '@angular/router';
import { AppRoutes } from './app-routes.enum';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
    { path: AppRoutes.Main, component: MainPageComponent},
    { path: AppRoutes.PrivacyPolicy, component: PrivacyPolicyComponent },
    // { path: '**', component: PageNotFoundComponent },
];
