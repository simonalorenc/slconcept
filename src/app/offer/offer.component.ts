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
    this.seoService.setTitle("Oferta")
  }
}
