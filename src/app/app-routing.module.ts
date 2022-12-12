import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionComponent } from './components/autenticacion/autenticacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { UnidadCeroTopicoDosComponent } from './components/unidad-cero/topico-dos/topico-dos.component';
import { UnidadCeroTopicoTresComponent } from './components/unidad-cero/topico-tres/topico-tres.component';
import { UnidadCeroTopicoUnoComponent } from './components/unidad-cero/topico-uno/topico-uno.component';
import { UnidadDosTopicoCincoComponent } from './components/unidad-dos/topico-cinco/topico-cinco.component';
import { UnidadDosTopicoCuatroComponent } from './components/unidad-dos/topico-cuatro/topico-cuatro.component';
import { UnidadDosTopicoDosComponent } from './components/unidad-dos/topico-dos/topico-dos.component';
import { UnidadDosTopicoSeisComponent } from './components/unidad-dos/topico-seis/topico-seis.component';
import { UnidadDosTopicoTresComponent } from './components/unidad-dos/topico-tres/topico-tres.component';
import { UnidadDosTopicoUnoComponent } from './components/unidad-dos/topico-uno/topico-uno.component';
import { UnidadUnoTopicoCincoComponent } from './components/unidad-uno/topico-cinco/topico-cinco.component';
import { UnidadUnoTopicoCuatroComponent } from './components/unidad-uno/topico-cuatro/topico-cuatro.component';
import { UnidadUnoTopicoDosComponent } from './components/unidad-uno/topico-dos/topico-dos.component';
import { UnidadUnoTopicoTresComponent } from './components/unidad-uno/topico-tres/topico-tres.component';
import { UnidadUnoTopicoUnoComponent } from './components/unidad-uno/topico-uno/topico-uno.component';

const routes: Routes = [
  { path: 'autenticacion', component: AutenticacionComponent },
  { path: '', component: InicioComponent },
  { path: 'bienvenido', children: [
    { path: '', component: UnidadCeroTopicoUnoComponent },
    { path: 'estructura-del-curso', component: UnidadCeroTopicoDosComponent },
    { path: 'temario', component: UnidadCeroTopicoTresComponent }
  ]}, 
  { path: 'introduccion-ingieneria-de-sistemas', children: [
    { path: '', component: UnidadUnoTopicoUnoComponent },
    { path: 'historia-ingenieria', component: UnidadUnoTopicoDosComponent },
    { path: 'ingenieria-en-colombia', component: UnidadUnoTopicoTresComponent },
    { path: 'cualidades-del-ingeniero', component: UnidadUnoTopicoCuatroComponent },
    { path: 'codigo-de-etica-del-ingeniero', component: UnidadUnoTopicoCincoComponent }
  ]},
  { path: 'ingenieria-de-sistemas', children: [
    { path: '', component: UnidadDosTopicoUnoComponent },
    { path: 'que-es-la-ingenieria-de-sistemas', component: UnidadDosTopicoDosComponent },
    { path: 'campos-de-un-ingeniero-de-sistemas', component: UnidadDosTopicoTresComponent  },
    { path: 'Proyecto-Educativo-Institucional(PEI)', component: UnidadDosTopicoCuatroComponent },
    { path: 'Proyecto-Educativo-del-Programa(PEP)', component: UnidadDosTopicoCincoComponent },
    { path: 'acreditacion-de-alta-calidad-de-la-Ingenieria-de-Sistemas-en-la-UFPS', component: UnidadDosTopicoSeisComponent }
  ]},
  { path: 'hardware', children: [
    { path: 'historia-de-los-componentes', component: UnidadUnoTopicoUnoComponent },
    { path: 'generaciones-de-los-computadores', component: UnidadUnoTopicoDosComponent },
    { path: 'tipos-de-computadoras', component: UnidadUnoTopicoTresComponent },
    { path: 'hardware-de-Entrada', component: UnidadUnoTopicoCuatroComponent },
    { path: 'hardware-de-Salida', component: UnidadUnoTopicoCincoComponent },
    { path: 'hardware-de-Proceso', component: UnidadUnoTopicoUnoComponent },
    { path: 'memoria-principal-y-secundaria', component: UnidadUnoTopicoDosComponent },
    { path: 'buses-del-sistema', component: UnidadUnoTopicoTresComponent },
    { path: 'funcionamiento-interno-del-computador', component: UnidadUnoTopicoCuatroComponent },
    { path: 'ensamble-de-computador', component: UnidadUnoTopicoCincoComponent },
    { path: 'como-procesa-los-datos-el-computador', component: UnidadUnoTopicoUnoComponent },
    { path: 'representacion-de-los-datos', component: UnidadUnoTopicoDosComponent },
    { path: 'factores-que-afectan-la-velocidad-del-procesamiento', component: UnidadUnoTopicoTresComponent }
  ]},
  { path: 'derechos-de-autor', children: [
    { path: 'ley-23-Colombia-(UNESCO)', component: UnidadUnoTopicoUnoComponent },
    { path: 'normatividad-de-derechos-de-actor-y-propiedad-intelectual', component: UnidadUnoTopicoDosComponent },
    { path: 'politica-de-proteccion-de-datos', component: UnidadUnoTopicoTresComponent },
    { path: 'preguntas-frecuentes-sobre-derecho-de-autor', component: UnidadUnoTopicoCuatroComponent },
    { path: '¿que-es-el-copyright?', component: UnidadUnoTopicoCincoComponent },
    { path: '¿que-es-la-propiedad-intelectual?', component: UnidadUnoTopicoCincoComponent }
  ]},
  { path: 'software-y-licencias', children: [
    { path: 'conceptos-del-software', component: UnidadUnoTopicoUnoComponent },
    { path: 'software-base', component: UnidadUnoTopicoDosComponent },
    { path: 'software-de-desarrollo', component: UnidadUnoTopicoTresComponent },
    { path: 'software-de-aplicacion', component: UnidadUnoTopicoCuatroComponent },
    { path: 'software-utilitario', component: UnidadUnoTopicoCincoComponent },
    { path: 'licencia-de-software', component: UnidadUnoTopicoCincoComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
