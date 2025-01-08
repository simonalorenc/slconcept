import { Component } from '@angular/core';
import { AppRoutes } from '../app-routes.enum';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterModule, CommonModule, NgOptimizedImage],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  portfolioDetailPath = AppRoutes.PortfolioDetail;

  constructor(private router: Router) {}

  projects = [
    { title: 'projekt-1', imageUrl: 'portfolio/1/3.avif' },
    { title: 'projekt-2', imageUrl: 'portfolio/2/1.avif' },
    { title: 'projekt-3', imageUrl: 'portfolio/3/3.avif' },
    { title: 'projekt-4', imageUrl: 'portfolio/4/4.avif' },
    { title: 'projekt-5', imageUrl: 'portfolio/5/1.avif' },
    { title: 'projekt-6', imageUrl: 'portfolio/6/1.avif' },
    { title: 'projekt-7', imageUrl: 'portfolio/7/1.avif' },
    { title: 'projekt-8', imageUrl: 'portfolio/8/1.avif' },
    { title: 'projekt-9', imageUrl: 'portfolio/9/4.avif' },
    { title: 'projekt-9', imageUrl: 'portfolio/10/1.avif' },
    { title: 'projekt-9', imageUrl: 'portfolio/11/1.avif' },
    { title: 'projekt-9', imageUrl: 'portfolio/12/1.avif' },
    { title: 'projekt-9', imageUrl: 'portfolio/13/1.avif' },
    { title: 'projekt-9', imageUrl: 'portfolio/14/4.avif' },
    { title: 'projekt-9', imageUrl: 'portfolio/15/1.avif' },
    { title: 'projekt-9', imageUrl: 'portfolio/16/9.avif' },
  ];

  goToProject(title: string) {
    this.router.navigate(['/projekty', title]);
  }
}
