import { Component, OnInit } from '@angular/core';
import { AppRoutes } from '../app-routes.enum';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProjectsService } from './data/projects.service';
import { Project } from './data/project';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterModule, CommonModule, NgOptimizedImage],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  portfolioDetailPath = AppRoutes.PortfolioDetail;
  projects: Project[] = [];

  constructor(
    private projectsService: ProjectsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }

  goToProject(id: string) {
    this.router.navigate(['/projekty', id]);
  }
}
