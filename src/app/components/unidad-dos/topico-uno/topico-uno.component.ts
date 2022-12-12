import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unidad-dos-topico-uno',
  templateUrl: './topico-uno.component.html',
  styleUrls: ['./topico-uno.component.css']
})
export class UnidadDosTopicoUnoComponent {
  menu: any[] = [];

  constructor(private router: Router) {
    this.menu = [
      { value: '', link: '' },
      { value: '', link: '' },
      { value: '', link: '' },
      { value: '', link: '' },
      { value: '', link: '' }
    ];
  }

  paginaSiguiente(): void {
    this.router.navigateByUrl('/introduccion-ingieneria-de-sistemas/historia-ingenieria');
  }

  paginaAnterior(): void {
    this.router.navigateByUrl('/bienvenido/temario');
  }
}
