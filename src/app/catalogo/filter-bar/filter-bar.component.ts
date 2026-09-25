import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Filtros } from '../../services/eco.service';
import { TIPOS_RUTA, DIFICULTADES } from '../../shared/constantes';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter-bar.component.html'
})
export class FilterBarComponent {
  filtros = model.required<Filtros>();
  tipos = TIPOS_RUTA;
  dificultades = DIFICULTADES;

  actualizar(campo: keyof Filtros, valor: string | number) {
    this.filtros.set({ ...this.filtros(), [campo]: valor });
  }
}
