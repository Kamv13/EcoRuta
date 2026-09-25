import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  variant = input<'' | 'wide' | 'danger'>('');
  onClose = output<void>();

  cerrarDesdeOverlay(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.onClose.emit();
    }
  }
}
