import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SeoService } from '../utils/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setTitle('Aranżacja, projektowanie wnętrz');
    this.seoService.setDescription(
      'SL Concept - Oferuję profesjonalne projektowanie wnętrz w atrakcyjnych cenach. Tworzę wyjątkowe projekty wnętrz dopasowane do Twoich potrzeb. Skontaktuj się ze mną już dziś!'
    );
  }
}
