import { Component, input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  readonly bannerFond = input.required<string>();
  readonly bannerTitle = input.required<string>();
  readonly bannerDescription = input.required<string>();
}
