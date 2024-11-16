import { Component } from '@angular/core';
import { AppRoutes } from '../app-routes.enum';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio-preview',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './portfolio-preview.component.html',
  styleUrl: './portfolio-preview.component.scss'
})
export class PortfolioPreviewComponent {
  portfolioPath = AppRoutes.Portfolio;
}
