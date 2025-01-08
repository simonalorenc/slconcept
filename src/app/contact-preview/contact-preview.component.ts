import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-preview',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './contact-preview.component.html',
  styleUrl: './contact-preview.component.scss',
})
export class ContactPreviewComponent {
  constructor() {}

  onClickContact() {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
}
