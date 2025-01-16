import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule], // Asegúrate de incluir CommonModule para usar *ngFor
})
export class HeaderComponent {
  // Menú principal con las secciones estándar
  menuItems = [
    { label: 'Portafolio', link: '#portfolio' },
    { label: 'Servicios', link: '#services' },
  ];

  // Métodos para manejo de acciones en el menú
  onMenuClick(link: string): void {
    console.log(`Navigating to ${link}`);
  }

  // Información de contacto para los íconos (opcional, si necesitas usar dinámicamente)
  contactLinks = {
    email: 'melia30es@gmail.com',
    youtube: 'https://www.youtube.com/@asterchan7985',
  };
}
