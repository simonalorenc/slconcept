import { Component } from '@angular/core';
import { AppRoutes } from '../app-routes.enum';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about-me-preview',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './about-me-preview.component.html',
  styleUrl: './about-me-preview.component.scss'
})
export class AboutMePreviewComponent {
  aboutMePath = AppRoutes.AboutMe;
}
