import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { APropos } from './a-propos/a-propos.component';
import { Reflexologie } from './reflexologie/reflexologie.component';
import { ReservationCard } from './reservation-card/reservation-card.component';
import { CitationComponent } from './citation/citation.component';

@Component({
  selector: 'app-accueil',
  imports: [BannerComponent, Reflexologie, APropos, ReservationCard, CitationComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
})
export class Accueil {}
