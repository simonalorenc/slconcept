import {
  CommonModule,
  isPlatformBrowser,
  NgOptimizedImage,
} from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../portfolio/data/projects.service';
import { LightgalleryModule } from 'lightgallery/angular';

@Component({
  selector: 'app-portfolio-detail',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, LightgalleryModule],
  templateUrl: './portfolio-detail.component.html',
  styleUrl: './portfolio-detail.component.scss',
})
export class PortfolioDetailComponent implements OnInit {
  isBrowser: boolean;
  title: string = '';
  images: string[] = [];

  settings = {
    counter: true,
    download: false,
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.projectsService.getProject(projectId!).subscribe((project) => {
      this.title = project.title;
      this.images = project.images.map((image) => project.basePath + image);
    });
  }
}
