import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unidad-uno-topico-dos',
  templateUrl: './topico-dos.component.html',
  styleUrls: ['./topico-dos.component.css']
})
export class UnidadUnoTopicoDosComponent {
  menu: any[] = [];

  constructor(private router: Router) {
    this.menu = [
      { value: 'Tema', link: '/introduccion-ingieneria-de-sistemas' },
      { value: 'Historia de ingeniería', link: '/introduccion-ingieneria-de-sistemas/historia-ingenieria' },
      { value: 'Ingeniería en Colombia', link: '/introduccion-ingieneria-de-sistemas/ingenieria-en-colombia' },
      { value: 'Cualidades del ingeniero', link: '/introduccion-ingieneria-de-sistemas/cualidades-del-ingeniero' },
      { value: 'Codigo de etica del ingeniero', link: '/introduccion-ingieneria-de-sistemas/codigo-de-etica-del-ingeniero' }
    ];
  }

  paginaSiguiente(): void {
    this.router.navigateByUrl('/introduccion-ingieneria-de-sistemas/ingenieria-en-colombia');
  }

  paginaAnterior(): void {
    this.router.navigateByUrl('/introduccion-ingieneria-de-sistemas');
  }
}
