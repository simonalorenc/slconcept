import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-preview',
  standalone: true,
  imports: [],
  templateUrl: './contact-preview.component.html',
  styleUrl: './contact-preview.component.scss'
})
export class ContactPreviewComponent {

  constructor(
    private viewportScroller: ViewportScroller
  ){}


  onClickContact() {
    this.viewportScroller.scrollToPosition([0, document.body.scrollHeight])
  }
}
