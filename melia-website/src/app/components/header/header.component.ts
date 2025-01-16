import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule aquí

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule], // Agrega CommonModule aquí
})
export class HeaderComponent {
  menuItems = [
    { label: 'Portafolio', link: '#portfolio' },
    { label: 'Servicios', link: '#services' },
    { label: 'Contacto', link: '#contact' },
  ];

  onMenuClick(link: string): void {
    console.log(`Navigating to ${link}`);
  }
}
