import { Component, inject } from '@angular/core';
import { EcoService } from '../services/eco.service';
import { StatCardComponent } from './stat-card/stat-card.component';
import { PopularCardComponent } from './popular-card/popular-card.component';
import { RegionPanelComponent } from './region-panel/region-panel.component';
import { RecomendacionesPanelComponent } from './recomendaciones-panel/recomendaciones-panel.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatCardComponent, PopularCardComponent, RegionPanelComponent, RecomendacionesPanelComponent],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  protected ecoService = inject(EcoService);

  totalRutas = this.ecoService.totalRutas;
  dificultadPromedio = this.ecoService.dificultadPromedio;
  rutaMasPopular = this.ecoService.rutaMasPopular;
  rutasPorRegion = this.ecoService.rutasPorRegion;
}
