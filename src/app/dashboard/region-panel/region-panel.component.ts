import { Component, input } from '@angular/core';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-region-panel',
  standalone: true,
  imports: [KeyValuePipe],
  templateUrl: './region-panel.component.html'
})
export class RegionPanelComponent {
  regiones = input.required<Record<string, number>>();
}
