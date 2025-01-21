import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly BASE_URL = 'https://www.slconcept.pl';
  private readonly BASE_TITLE = 'SL Concept';
  private readonly BASE_SUFFIX = 'Aranżacja, projektowanie wnętrz';

  constructor(private titleService: Title, private metaService: Meta) {}

  setTitle(suffix: String): void {
    this.titleService.setTitle(this.BASE_TITLE + ' - ' + suffix);
  }

  setDescription(description: string): void {
    this.metaService.updateTag({ name: 'description', content: description });
  }

  setCanonicalUrl(routeUrl: string): void {
    const url = this.BASE_URL + routeUrl;

    let link = document.querySelector('link[rel="canonical"]');

    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }
}
