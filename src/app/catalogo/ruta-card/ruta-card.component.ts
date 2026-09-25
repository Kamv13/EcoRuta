import { Component, input, output } from '@angular/core';
import { Ruta } from '../../services/eco.service';

@Component({
  selector: 'app-ruta-card',
  standalone: true,
  templateUrl: './ruta-card.component.html'
})
export class RutaCardComponent {
  ruta = input.required<Ruta>();
  isAdmin = input(false);
  isLoggedIn = input(false);
  isFavorito = input(false);
  onDelete = output<number>();
  onFavorito = output<number>();
}
