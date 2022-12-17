import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionComponent } from './components/autenticacion/autenticacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { UnidadCeroTopicoDosComponent } from './components/unidad-cero/topico-dos/topico-dos.component';
import { UnidadCeroTopicoTresComponent } from './components/unidad-cero/topico-tres/topico-tres.component';
import { UnidadCeroTopicoUnoComponent } from './components/unidad-cero/topico-uno/topico-uno.component';
import { UnidadCincoTopicoCincoComponent } from './components/unidad-cinco/topico-cinco/topico-cinco.component';
import { UnidadCincoTopicoCuatroComponent } from './components/unidad-cinco/topico-cuatro/topico-cuatro.component';
import { UnidadCincoTopicoDosComponent } from './components/unidad-cinco/topico-dos/topico-dos.component';
import { UnidadCincoTopicoSeisComponent } from './components/unidad-cinco/topico-seis/topico-seis.component';
import { UnidadCincoTopicoSieteComponent } from './components/unidad-cinco/topico-siete/topico-siete.component';
import { UnidadCincoTopicoTresComponent } from './components/unidad-cinco/topico-tres/topico-tres.component';
import { UnidadCincoTopicoUnoComponent } from './components/unidad-cinco/topico-uno/topico-uno.component';
import { UnidadCuatroTopicoCincoComponent } from './components/unidad-cuatro/topico-cinco/topico-cinco.component';
import { UnidadCuatroTopicoCuatroComponent } from './components/unidad-cuatro/topico-cuatro/topico-cuatro.component';
import { UnidadCuatroTopicoDosComponent } from './components/unidad-cuatro/topico-dos/topico-dos.component';
import { UnidadCuatroTopicoSeisComponent } from './components/unidad-cuatro/topico-seis/topico-seis.component';
import { UnidadCuatroTopicoSieteComponent } from './components/unidad-cuatro/topico-siete/topico-siete.component';
import { UnidadCuatroTopicoTresComponent } from './components/unidad-cuatro/topico-tres/topico-tres.component';
import { UnidadCuatroTopicoUnoComponent } from './components/unidad-cuatro/topico-uno/topico-uno.component';
import { UnidadDosTopicoCincoComponent } from './components/unidad-dos/topico-cinco/topico-cinco.component';
import { UnidadDosTopicoCuatroComponent } from './components/unidad-dos/topico-cuatro/topico-cuatro.component';
import { UnidadDosTopicoDosComponent } from './components/unidad-dos/topico-dos/topico-dos.component';
import { UnidadDosTopicoSeisComponent } from './components/unidad-dos/topico-seis/topico-seis.component';
import { UnidadDosTopicoTresComponent } from './components/unidad-dos/topico-tres/topico-tres.component';
import { UnidadDosTopicoUnoComponent } from './components/unidad-dos/topico-uno/topico-uno.component';
import { UnidadTresTopicoCatorceComponent } from './components/unidad-tres/topico-catorce/topico-catorce.component';
import { UnidadTresTopicoCincoComponent } from './components/unidad-tres/topico-cinco/topico-cinco.component';
import { UnidadTresTopicoCuatroComponent } from './components/unidad-tres/topico-cuatro/topico-cuatro.component';
import { UnidadTresTopicoDiezComponent } from './components/unidad-tres/topico-diez/topico-diez.component';
import { UnidadTresTopicoDoceComponent } from './components/unidad-tres/topico-doce/topico-doce.component';
import { UnidadTresTopicoDosComponent } from './components/unidad-tres/topico-dos/topico-dos.component';
import { UnidadTresTopicoNueveComponent } from './components/unidad-tres/topico-nueve/topico-nueve.component';
import { UnidadTresTopicoOchoComponent } from './components/unidad-tres/topico-ocho/topico-ocho.component';
import { UnidadTresTopicoOnceComponent } from './components/unidad-tres/topico-once/topico-once.component';
import { UnidadTresTopicoSeisComponent } from './components/unidad-tres/topico-seis/topico-seis.component';
import { UnidadTresTopicoSieteComponent } from './components/unidad-tres/topico-siete/topico-siete.component';
import { UnidadTresTopicoTreceComponent } from './components/unidad-tres/topico-trece/topico-trece.component';
import { UnidadTresTopicoTresCincoComponent } from './components/unidad-tres/topico-tres-cinco/topico-tres-cinco.component';
import { UnidadTresTopicoTresCuatroComponent } from './components/unidad-tres/topico-tres-cuatro/topico-tres-cuatro.component';
import { UnidadTresTopicoTresDosComponent } from './components/unidad-tres/topico-tres-dos/topico-tres-dos.component';
import { UnidadTresTopicoTresTresComponent } from './components/unidad-tres/topico-tres-tres/topico-tres-tres.component';
import { UnidadTresTopicoTresComponent } from './components/unidad-tres/topico-tres/topico-tres.component';
import { UnidadTresTopicoUnoComponent } from './components/unidad-tres/topico-uno/topico-uno.component';
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
    { path: 'Proyecto-Educativo-Institucional-PEI', component: UnidadDosTopicoCuatroComponent },
    { path: 'Proyecto-Educativo-del-Programa-PEP', component: UnidadDosTopicoCincoComponent },
    { path: 'acreditacion-de-alta-calidad-de-la-Ingenieria-de-Sistemas-en-la-UFPS', component: UnidadDosTopicoSeisComponent }
  ]},
  { path: 'hardware', children: [
    { path: '', component: UnidadTresTopicoUnoComponent },
    { path: 'historia-de-los-componentes', component: UnidadTresTopicoDosComponent },
    { path: 'generaciones-de-los-computadores', children: [
      { path: 'primera-generacion', component: UnidadTresTopicoTresComponent },
      { path: 'segunda-generacion', component: UnidadTresTopicoTresDosComponent },
      { path: 'tercera-generacion', component: UnidadTresTopicoTresTresComponent },
      { path: 'cuarta-generacion', component: UnidadTresTopicoTresCuatroComponent },
      { path: 'quinta-generacion', component: UnidadTresTopicoTresCincoComponent }
    ]},
    { path: 'tipos-de-computadoras', component: UnidadTresTopicoCuatroComponent },
    { path: 'hardware-de-Entrada', component: UnidadTresTopicoCincoComponent },
    { path: 'hardware-de-Salida', component: UnidadTresTopicoSeisComponent },
    { path: 'hardware-de-Proceso', component: UnidadTresTopicoSieteComponent },
    { path: 'memoria-principal-y-secundaria', component: UnidadTresTopicoOchoComponent },
    { path: 'buses-del-sistema', component: UnidadTresTopicoNueveComponent },
    { path: 'funcionamiento-interno-del-computador', component: UnidadTresTopicoDiezComponent },
    { path: 'ensamble-de-computador', component: UnidadTresTopicoOnceComponent },
    { path: 'como-procesa-los-datos-el-computador', component: UnidadTresTopicoDoceComponent },
    { path: 'representacion-de-los-datos', component: UnidadTresTopicoTreceComponent },
    { path: 'factores-que-afectan-la-velocidad-del-procesamiento', component: UnidadTresTopicoCatorceComponent }
  ]},
  { path: 'derechos-de-autor', children: [
    { path: '', component: UnidadCuatroTopicoUnoComponent },
    { path: 'ley-23-Colombia-UNESCO', component: UnidadCuatroTopicoDosComponent },
    { path: 'normatividad-de-derechos-de-actor-y-propiedad-intelectual', component: UnidadCuatroTopicoTresComponent },
    { path: 'politica-de-proteccion-de-datos', component: UnidadCuatroTopicoCuatroComponent },
    { path: 'preguntas-frecuentes-sobre-derecho-de-autor', component: UnidadCuatroTopicoCincoComponent },
    { path: 'que-es-el-copyright', component: UnidadCuatroTopicoSeisComponent },
    { path: 'que-es-la-propiedad-intelectual', component: UnidadCuatroTopicoSieteComponent }
  ]},
  { path: 'software-y-licencias', children: [
    { path: '', component: UnidadCincoTopicoUnoComponent },
    { path: 'conceptos-del-software', component: UnidadCincoTopicoDosComponent },
    { path: 'software-base', component: UnidadCincoTopicoTresComponent },
    { path: 'software-de-desarrollo', component: UnidadCincoTopicoCuatroComponent },
    { path: 'software-de-aplicacion', component: UnidadCincoTopicoCincoComponent },
    { path: 'software-utilitario', component: UnidadCincoTopicoSeisComponent },
    { path: 'licencia-de-software', component: UnidadCincoTopicoSieteComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
