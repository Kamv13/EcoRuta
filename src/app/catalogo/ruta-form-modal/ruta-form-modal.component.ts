import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ruta } from '../../services/eco.service';
import { ModalComponent } from '../../shared/modal/modal.component';
import { TIPOS_RUTA, DIFICULTADES } from '../../shared/constantes';

@Component({
  selector: 'app-ruta-form-modal',
  standalone: true,
  imports: [FormsModule, ModalComponent],
  templateUrl: './ruta-form-modal.component.html'
})
export class RutaFormModalComponent {
  onGuardar = output<Omit<Ruta, 'id'>>();
  onClose = output<void>();

  tipos = TIPOS_RUTA;
  dificultades = DIFICULTADES;

  newNombre = signal('');
  newUbicacion = signal('');
  newDificultad = signal('Media');
  newPrecio = signal(100);
  newDuracion = signal('');
  newTipo = signal('Senderismo');
  newDescripcion = signal('');
  newImagen = signal('');

  guardar() {
    if (!this.newNombre() || !this.newUbicacion()) return;
    this.onGuardar.emit({
      nombre: this.newNombre(),
      ubicacion: this.newUbicacion(),
      dificultad: this.newDificultad(),
      precio: this.newPrecio(),
      duracion: this.newDuracion(),
      tipo: this.newTipo(),
      popularidad: 50,
      imagen: this.newImagen() || `https://placehold.co/600x400/1B4332/B7E4C7?text=${encodeURIComponent(this.newNombre())}`,
      descripcion: this.newDescripcion()
    });
  }
}
