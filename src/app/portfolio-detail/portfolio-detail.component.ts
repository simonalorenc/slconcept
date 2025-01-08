import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../portfolio/data/projects.service';

@Component({
  selector: 'app-portfolio-detail',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './portfolio-detail.component.html',
  styleUrl: './portfolio-detail.component.scss',
})
export class PortfolioDetailComponent implements OnInit {
  title: string = '';
  images: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.projectsService.getProject(projectId!).subscribe((project) => {
      this.title = project.title;
      this.images = project.images.map((image) => project.basePath + image);
    });
  }
}
