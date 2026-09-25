import { Component, input, output } from '@angular/core';
import { Ruta } from '../../services/eco.service';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-confirm-delete-modal',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './confirm-delete-modal.component.html'
})
export class ConfirmDeleteModalComponent {
  ruta = input.required<Ruta>();
  onConfirm = output<void>();
  onClose = output<void>();
}
