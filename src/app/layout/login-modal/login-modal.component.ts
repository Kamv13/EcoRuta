import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [FormsModule, ModalComponent],
  templateUrl: './login-modal.component.html'
})
export class LoginModalComponent {
  private auth = inject(AuthService);
  onClose = output<void>();

  loginEmail = signal('');
  loginPassword = signal('');
  loginError = signal('');

  submitLogin() {
    if (!this.loginEmail().includes('@')) {
      this.loginError.set('Parece que ingresaste un nombre de usuario. Inicia sesión con tu correo electrónico (ej: kevin@ecoruta.hn).');
      return;
    }
    if (this.auth.login(this.loginEmail(), this.loginPassword())) {
      this.onClose.emit();
    } else {
      this.loginError.set('Correo o contraseña incorrectos.');
    }
  }
}
