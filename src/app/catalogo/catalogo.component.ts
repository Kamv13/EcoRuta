import { Component, inject, signal, computed } from '@angular/core';
import { EcoService, Ruta, Filtros } from '../services/eco.service';
import { AuthService } from '../services/auth.service';
import { RutaCardComponent } from './ruta-card/ruta-card.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { RutaFormModalComponent } from './ruta-form-modal/ruta-form-modal.component';
import { ConfirmDeleteModalComponent } from './confirm-delete-modal/confirm-delete-modal.component';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [RutaCardComponent, FilterBarComponent, RutaFormModalComponent, ConfirmDeleteModalComponent],
  templateUrl: './catalogo.component.html'
})
export class CatalogoComponent {
  protected ecoService = inject(EcoService);
  protected auth = inject(AuthService);

  filtros = signal<Filtros>({ nombre: '', dificultad: '', precio: 1000, tipo: '' });
  soloFavoritos = signal(false);
  showAddModal = signal(false);
  rutaAEliminar = signal<Ruta | null>(null);

  rutasFiltradas = computed(() => {
    let rutas = this.ecoService.getFilteredRutas(this.filtros());
    if (this.soloFavoritos() && !this.auth.isAdmin()) {
      rutas = rutas.filter(r => this.auth.isFavorito(r.id));
    }
    return rutas;
  });

  submitAddRuta(ruta: Omit<Ruta, 'id'>) {
    this.ecoService.addRuta(ruta);
    this.showAddModal.set(false);
  }

  deleteRuta(id: number) {
    this.rutaAEliminar.set(this.ecoService.rutas().find(r => r.id === id) ?? null);
  }

  confirmarEliminar() {
    const ruta = this.rutaAEliminar();
    if (ruta) this.ecoService.deleteRuta(ruta.id);
    this.rutaAEliminar.set(null);
  }
}
