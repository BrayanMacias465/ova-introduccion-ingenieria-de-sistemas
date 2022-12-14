import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topico-cinco',
  templateUrl: './topico-cinco.component.html',
  styleUrls: ['./topico-cinco.component.css']
})
export class UnidadCuatroTopicoCincoComponent {
  menu: any[] = [];

  constructor(private router: Router) {
    this.menu = [
      { value: 'Tema',                                                      link: '/derechos-de-autor' },
      { value: 'Ley 23. Colombia (UNESCO)',                                 link: '/derechos-de-autor/ley-23-Colombia-UNESCO' },
      { value: 'Normatividad de derechos de actor y propiedad intelectual', link: '/derechos-de-autor/normatividad-de-derechos-de-actor-y-propiedad-intelectual' },
      { value: 'Politica de proteccion de datos',                           link: '/derechos-de-autor/politica-de-proteccion-de-datos' },
      { value: 'Preguntas frecuentes sobre derecho de autor',               link: '/derechos-de-autor/preguntas-frecuentes-sobre-derecho-de-autor' },
      { value: '¿Que es el copyright?',                                     link: '/derechos-de-autor/que-es-el-copyright' },
      { value: '¿Que es la propiedad intelectual?',                         link: '/derechos-de-autor/que-es-la-propiedad-intelectual' }
    ];
  }

  paginaSiguiente(): void {
    this.router.navigateByUrl('/derechos-de-autor/que-es-el-copyright');
  }

  paginaAnterior(): void {
    this.router.navigateByUrl('/derechos-de-autor/politica-de-proteccion-de-datos');
  }
}
