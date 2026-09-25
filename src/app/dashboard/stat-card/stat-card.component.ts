import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  templateUrl: './stat-card.component.html'
})
export class StatCardComponent {
  title = input.required<string>();
  value = input.required<string | number>();
  variant = input<'jungle' | 'mid' | 'ochre'>('jungle');
}
