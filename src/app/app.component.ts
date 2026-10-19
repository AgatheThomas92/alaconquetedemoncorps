import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { SiteNav } from './layout/site-nav/site-nav.component';
import { SiteFooter } from './layout/site-footer/site-footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteNav, SiteFooter],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  private readonly router = inject(Router);
  private readonly scrollArea = viewChild<ElementRef<HTMLElement>>('scrollArea');

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          this.scrollToFragment(fragment);
          return;
        }
        this.scrollArea()?.nativeElement.scrollTo({ top: 0 });
      });
  }

  private scrollToFragment(id: string, remaining = 8): void {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    if (remaining > 0) {
      setTimeout(() => this.scrollToFragment(id, remaining - 1), 50);
    }
  }
}
