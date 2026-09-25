import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EcoService } from '../../services/eco.service';
import { AuthService } from '../../services/auth.service';
import { NIVELES, DIFICULTAD_POR_NIVEL } from '../../shared/constantes';

@Component({
  selector: 'app-recomendaciones-panel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recomendaciones-panel.component.html'
})
export class RecomendacionesPanelComponent {
  protected auth = inject(AuthService);
  protected recomendaciones = inject(EcoService).recomendaciones;
  protected niveles = NIVELES;
  protected dificultadPorNivel = DIFICULTAD_POR_NIVEL;
}
