import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unidad-dos-topico-cuatro',
  templateUrl: './topico-cuatro.component.html',
  styleUrls: ['./topico-cuatro.component.css']
})
export class UnidadDosTopicoCuatroComponent {
  menu: any[] = [];

  constructor(private router: Router) {
    this.menu = [
      { value: 'Tema', link: '/ingenieria-de-sistemas' },
      { value: '¿Que es la ingenieria de sistemas?', link: '/ingenieria-de-sistemas/que-es-la-ingenieria-de-sistemas' },
      { value: 'Campos de un ingeniero de sistemas', link: '/ingenieria-de-sistemas/campos-de-un-ingeniero-de-sistemas' },
      { value: 'Proyecto Educativo Institucional(PEI)', link: '/ingenieria-de-sistemas/Proyecto-Educativo-Institucional-PEI' },
      { value: 'Proyecto Educativo del Programa(PEP)', link: '/ingenieria-de-sistemas/Proyecto-Educativo-del-Programa-PEP' },
      { value: 'Acreditación de alta calidad de la Ingeniería de Sistemas en la UFPS', link: '/ingenieria-de-sistemas/acreditacion-de-alta-calidad-de-la-Ingenieria-de-Sistemas-en-la-UFPS' }
    ];
  }

  paginaSiguiente(): void {
    this.router.navigateByUrl('/ingenieria-de-sistemas/Proyecto-Educativo-del-Programa-PEP');
  }

  paginaAnterior(): void {
    this.router.navigateByUrl('/ingenieria-de-sistemas/campos-de-un-ingeniero-de-sistemas');
  }
}
