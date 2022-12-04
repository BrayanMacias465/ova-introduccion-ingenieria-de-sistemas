import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unidad-cero-topico-dos',
  templateUrl: './topico-dos.component.html',
  styleUrls: ['./topico-dos.component.css']
})
export class UnidadCeroTopicoDosComponent {
  menu: any[] = [];

  constructor(private router: Router) {
    this.menu = [
      { value: 'Bienvenido', link: '/bienvenido' },
      { value: 'Estructura del Curso', link: '/bienvenido/estructura-del-curso' },
      { value: 'Temario', link: '/bienvenido/temario' }
    ];
  }

  paginaSiguiente(): void {
    this.router.navigateByUrl('/bienvenido/temario');
  }

  paginaAnterior(): void {
    this.router.navigateByUrl('/bienvenido');
  }
}
