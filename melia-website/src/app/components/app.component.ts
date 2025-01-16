import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'; // Ruta del componente Header

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  template: `
    <app-header></app-header>
    <div>
      <h1>Bienvenido a mi aplicación</h1>
    </div>
  `,
})
export class AppComponent {
  title: 'melia-website' | undefined;
}
