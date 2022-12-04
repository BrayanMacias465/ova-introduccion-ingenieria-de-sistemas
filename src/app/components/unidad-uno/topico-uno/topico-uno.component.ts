import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unidad-uno-topico-uno',
  templateUrl: './topico-uno.component.html',
  styleUrls: ['./topico-uno.component.css']
})
export class UnidadUnoTopicoUnoComponent {
  menu: any[] = [];

  constructor(private router: Router) {
    this.menu = [
      { value: 'Tema', link: '/introduccion-ingieneria-de-sistemas' },
      { value: 'Historia de ingeniería', link: '/introduccion-ingieneria-de-sistemas/historia-ingenieria' },
      { value: 'Ingeniería en Colombia', link: '/introduccion-ingieneria-de-sistemas/ingenieria-en-colombia' }
    ];
  }

  paginaSiguiente(): void {
    this.router.navigateByUrl('/introduccion-ingieneria-de-sistemas/historia-ingenieria');
  }

  paginaAnterior(): void {
    this.router.navigateByUrl('/bienvenido/temario');
  }
}