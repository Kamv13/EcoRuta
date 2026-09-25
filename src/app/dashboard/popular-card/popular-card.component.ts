import { Component, input } from '@angular/core';
import { Ruta } from '../../services/eco.service';

@Component({
  selector: 'app-popular-card',
  standalone: true,
  templateUrl: './popular-card.component.html'
})
export class PopularCardComponent {
  ruta = input.required<Ruta>();
}
