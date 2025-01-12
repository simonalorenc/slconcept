import { Component, OnInit } from '@angular/core';
import { SeoService } from '../utils/seo.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setTitle("O mnie")
    this.seoService.setDescription(
      'Architekt wnętrz Simona Lorenc. Absolwentka Wydziału Architektury Politechniki Krakowskiej z doświadczeniem w polskich i zagranicznych pracowniach. Poznajmy się lepiej!'
    );
  }
}
