import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginModalComponent } from './layout/login-modal/login-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, LoginModalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showLogin = signal(false);
}
