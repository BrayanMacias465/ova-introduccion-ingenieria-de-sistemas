import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topico-uno',
  templateUrl: './topico-uno.component.html',
  styleUrls: ['./topico-uno.component.css']
})
export class UnidadTresTopicoUnoComponent {
  menu: any[] = [];

  constructor(private router: Router) {
    this.menu = [
      { value: 'Tema',                                                link: '/ingenieria-de-sistemas' },
      { value: 'Historia de los componentes',                         link: '/ingenieria-de-sistemas/que-es-la-ingenieria-de-sistemas' },
      { value: 'Generaciones de los computadores',                    link: '/ingenieria-de-sistemas/campos-de-un-ingeniero-de-sistemas' },
      { value: 'Tipos de computadoras',                               link: '/ingenieria-de-sistemas/Proyecto-Educativo-Institucional-PEI' },
      { value: 'Hardware de Entrada',                                 link: '/ingenieria-de-sistemas/Proyecto-Educativo-del-Programa-PEP' },
      { value: 'Hardware de Salida',                                  link: '/ingenieria-de-sistemas/acreditacion-de-alta-calidad-de-la-Ingenieria-de-Sistemas-en-la-UFPS' },
      { value: 'Hardware de Proceso',                                 link: '/ingenieria-de-sistemas/que-es-la-ingenieria-de-sistemas' },
      { value: 'Memoria principal y secundaria',                      link: '/ingenieria-de-sistemas/campos-de-un-ingeniero-de-sistemas' },
      { value: 'Buses del sistema',                                   link: '/ingenieria-de-sistemas/Proyecto-Educativo-Institucional-PEI' },
      { value: 'Funcionamiento interno del computador',               link: '/ingenieria-de-sistemas/Proyecto-Educativo-del-Programa-PEP' },
      { value: 'Ensamble de computador',                              link: '/ingenieria-de-sistemas/acreditacion-de-alta-calidad-de-la-Ingenieria-de-Sistemas-en-la-UFPS' },
      { value: 'Como procesa los datos el computador',                link: '/ingenieria-de-sistemas/que-es-la-ingenieria-de-sistemas' },
      { value: 'Representacion de los datos',                         link: '/ingenieria-de-sistemas/campos-de-un-ingeniero-de-sistemas' },
      { value: 'Factores que afectan la velocidad del procesamiento', link: '/ingenieria-de-sistemas/Proyecto-Educativo-Institucional-PEI' }
    ];
  }

  paginaSiguiente(): void {
    this.router.navigateByUrl('/ingenieria-de-sistemas/que-es-la-ingenieria-de-sistemas');
  }

  paginaAnterior(): void {
    this.router.navigateByUrl('/introduccion-ingieneria-de-sistemas/codigo-de-etica-del-ingeniero');
  }
}
