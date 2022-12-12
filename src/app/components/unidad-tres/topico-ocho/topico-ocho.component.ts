import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topico-ocho',
  templateUrl: './topico-ocho.component.html',
  styleUrls: ['./topico-ocho.component.css']
})
export class UnidadTresTopicoOchoComponent {
  menu: any[] = [];

  constructor(private router: Router) {
    this.menu = [
      { value: 'Tema',                                                link: '/hardware' },
      { value: 'Historia de los componentes',                         link: '/hardware/historia-de-los-componentes' },
      { value: 'Generaciones de los computadores',                    link: '/hardware/generaciones-de-los-computadores/primera-generacion' },
      { value: 'Tipos de computadoras',                               link: '/hardware/tipos-de-computadoras' },
      { value: 'Hardware de Entrada',                                 link: '/hardware/hardware-de-Entrada' },
      { value: 'Hardware de Salida',                                  link: '/hardware/hardware-de-Salida' },
      { value: 'Hardware de Proceso',                                 link: '/hardware/hardware-de-Proceso' },
      { value: 'Memoria principal y secundaria',                      link: '/hardware/memoria-principal-y-secundaria' },
      { value: 'Buses del sistema',                                   link: '/hardware/buses-del-sistema' },
      { value: 'Funcionamiento interno del computador',               link: '/hardware/funcionamiento-interno-del-computador' },
      { value: 'Ensamble de computador',                              link: '/hardware/ensamble-de-computador' },
      { value: 'Como procesa los datos el computador',                link: '/hardware/como-procesa-los-datos-el-computador' },
      { value: 'Representacion de los datos',                         link: '/hardware/representacion-de-los-datos' },
      { value: 'Factores que afectan la velocidad del procesamiento', link: '/hardware/factores-que-afectan-la-velocidad-del-procesamiento' }
    ];
  }

  paginaSiguiente(): void {
    this.router.navigateByUrl('/hardware/buses-del-sistema');
  }

  paginaAnterior(): void {
    this.router.navigateByUrl('/hardware/hardware-de-Proceso');
  }
}
