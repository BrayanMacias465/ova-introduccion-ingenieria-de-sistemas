import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unidad-cero-topico-tres',
  templateUrl: './topico-tres.component.html',
  styleUrls: ['./topico-tres.component.css']
})
export class UnidadCeroTopicoTresComponent {
  menu: any[] = [];

  constructor(private router: Router) {
    this.menu = [
      { value: 'Bienvenido', link: '/bienvenido' },
      { value: 'Estructura del Curso', link: '/bienvenido/estructura-del-curso' },
      { value: 'Temario', link: '/bienvenido/temario' }
    ];
  }

  paginaSiguiente(): void {
    this.router.navigateByUrl('/introduccion-ingieneria-de-sistemas');
  }

  paginaAnterior(): void {
    this.router.navigateByUrl('/bienvenido/estructura-del-curso');
  }
}
