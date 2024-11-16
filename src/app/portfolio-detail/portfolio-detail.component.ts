import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-detail.component.html',
  styleUrl: './portfolio-detail.component.scss'
})
export class PortfolioDetailComponent {
  projectTitle: string | null = null;

  images = [
    {imageUrl: 'portfolio-preview/1.png'},
    {imageUrl: 'portfolio-preview/1.png'},
    {imageUrl: 'portfolio-preview/1.png'},
    {imageUrl: 'portfolio-preview/1.png'},
    {imageUrl: 'portfolio-preview/1.png'},
    {imageUrl: 'portfolio-preview/1.png'}
  ]

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.projectTitle = this.route.snapshot.paramMap.get('title');
  }
}
