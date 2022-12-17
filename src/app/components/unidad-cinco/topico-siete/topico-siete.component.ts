import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topico-siete',
  templateUrl: './topico-siete.component.html',
  styleUrls: ['./topico-siete.component.css']
})
export class UnidadCincoTopicoSieteComponent {
  menu: any[] = [];

  constructor(private router: Router) {
    this.menu = [
      { value: 'Tema',                    link: '/software-y-licencias' },
      { value: 'Conceptos del software',  link: '/software-y-licencias/conceptos-del-software' },
      { value: 'Software base',           link: '/software-y-licencias/software-base' },
      { value: 'Software de desarrollo',  link: '/software-y-licencias/software-de-desarrollo' },
      { value: 'Software de aplicacion',  link: '/software-y-licencias/software-de-aplicacion' },
      { value: 'Software utilitario',     link: '/software-y-licencias/software-utilitario' },
      { value: 'Licencia de software',    link: '/software-y-licencias/licencia-de-software' }
    ];
  }

  paginaSiguiente(): void {
    this.router.navigateByUrl('/software-y-licencias/software-utilitario');
  }

  paginaAnterior(): void {
    this.router.navigateByUrl('/software-y-licencias/software-utilitario');
  }
}
