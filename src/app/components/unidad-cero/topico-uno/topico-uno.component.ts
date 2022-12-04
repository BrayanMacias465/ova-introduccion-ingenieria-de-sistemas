import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unidad-cero-topico-uno',
  templateUrl: './topico-uno.component.html',
  styleUrls: ['./topico-uno.component.css']
})
export class UnidadCeroTopicoUnoComponent {
  menu: any[] = [];

  constructor(private router: Router) {
    this.menu = [
      { value: 'Bienvenido', link: '/bienvenido' },
      { value: 'Estructura del Curso', link: '/bienvenido/estructura-del-curso' },
      { value: 'Temario', link: '/bienvenido/temario' }
    ];
  }

  paginaSiguiente(): void {
    this.router.navigateByUrl('/bienvenido/estructura-del-curso');
  }
}
