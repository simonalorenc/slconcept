import { Component } from '@angular/core';
import { AppRoutes } from '../app-routes.enum';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterModule, CommonModule, NgOptimizedImage],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  portfolioDetailPath = AppRoutes.PortfolioDetail;

  constructor(private router: Router) {}

  projects = [
    {title: 'projekt-1', imageUrl: 'portfolio-preview/1.png'},
    {title: 'projekt-2', imageUrl: 'portfolio-preview/2.jpg'},
    {title: 'projekt-3', imageUrl: 'portfolio-preview/3.jpg'},
    {title: 'projekt-4', imageUrl: 'portfolio-preview/1.png'},
    {title: 'projekt-5', imageUrl: 'portfolio-preview/2.jpg'},
    {title: 'projekt-6', imageUrl: 'portfolio-preview/3.jpg'},
    {title: 'projekt-7', imageUrl: 'portfolio-preview/1.png'},
    {title: 'projekt-8', imageUrl: 'portfolio-preview/2.jpg'},
    {title: 'projekt-9', imageUrl: 'portfolio-preview/3.jpg'},
  ]

  goToProject(title: string) {
    this.router.navigate(['/projekty', title])
  }
}
