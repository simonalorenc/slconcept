import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SeoService } from '../utils/seo.service';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss',
})
export class OfferComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setTitle("Oferta");
    this.seoService.setDescription(
      'Oferuję kompleksowe projekty wnętrz, w tym rzuty funkcjonalne, wizualizacje 3D, rysunki techniczne oraz listę zakupów. Wszystko, czego potrzebujesz, aby zrealizować swoją wymarzoną przestrzeń.'
    );
  }
}
