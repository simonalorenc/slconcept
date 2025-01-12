import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, RouterModule, Scroll } from '@angular/router';
import { AppRoutes } from '../app-routes.enum';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { SeoService } from '../utils/seo.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('slideToggle', [
      state('void', style({ height: '0', opacity: 0 })),
      state('*', style({ height: '*', opacity: 1 })),
      transition('void <=> *', [animate('300ms ease-in-out')]),
    ]),
    trigger('transparentBackground', [
      state('true', style({ backgroundColor: 'transparent' })),
      state('false', style({ backgroundColor: '#908277' })),
      transition('* <=> *', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  private TRANSPARENT_SCROLL_OFFSET: number = 50;
  isCollapsed: boolean = true;
  isTransparent: boolean = true;
  isScrollAnimation: boolean = true;
  isScreenLarge: boolean = false;
  toggleIcon: string = 'header/menu.svg';

  mainPath = AppRoutes.Main;
  aboutMePath = AppRoutes.AboutMe;
  offerPath = AppRoutes.Offer;
  portfolioPath = AppRoutes.Portfolio;

  constructor(private router: Router, private seoService: SeoService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.handleNavigationEndEvent(event);
      } else if (event instanceof Scroll) {
        this.collapseIfExpanded();
      }
    });
  }

  private handleNavigationEndEvent(event: NavigationEnd) {
    this.seoService.setCanonicalUrl(event.url);
    this.collapseIfExpanded();
    const isCurrentRouteRoot = this.router.url === '/';
    this.isScrollAnimation = isCurrentRouteRoot;
    this.isTransparent = isCurrentRouteRoot;
  }

  @HostListener('window: scroll', ['$event'])
  private onScroll(event: Event): void {
    if (!this.isCollapsed) return;
    if (!this.isScrollAnimation) return;
    this.isTransparent = this.isTransparentScrollOffset();
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event: Event): void {
    this.checkScreenWidth();
    if (window.innerWidth > 992 && !this.isCollapsed) {
      this.toggleCollapse();
    }
  }

  private checkScreenWidth(): void {
    this.isScreenLarge = window.innerWidth > 992;
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.toggleIcon = this.isCollapsed ? 'header/menu.svg' : 'header/close.svg';
  }

  private isTransparentScrollOffset(): boolean {
    return window.scrollY < this.TRANSPARENT_SCROLL_OFFSET;
  }

  onClickContact() {
    this.collapseIfExpanded();
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

  private collapseIfExpanded() {
    if (!this.isCollapsed) {
      this.toggleCollapse();
    }
  }
}
