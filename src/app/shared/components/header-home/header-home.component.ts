import { Component } from '@angular/core';

@Component({
  selector: 'app-header-home',
  standalone: true,
  imports: [],
  templateUrl: './header-home.component.html',
  styleUrl: './header-home.component.scss'
})
export class HeaderHomeComponent {
  private scrollPosition: number = 0;

  onScroll(event: WheelEvent): void {
    event.preventDefault(); // Previene el comportamiento por defecto del scroll

    // Calcula el nuevo scroll basado en la dirección del desplazamiento
    const delta = event.deltaY;
    this.scrollPosition += delta;

    // Limita la posición de scroll (opcional)
    if (this.scrollPosition < 0) {
      this.scrollPosition = 0;
    }

    // Desplaza el contenido de acuerdo a la posición calculada
    const contentWall = document.getElementById('contentWall');
    if (contentWall) {
      contentWall.style.transform = `translateY(-${this.scrollPosition}px)`;
    }
  }
}
