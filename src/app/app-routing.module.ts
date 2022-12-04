import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionComponent } from './components/autenticacion/autenticacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { UnidadCeroTopicoDosComponent } from './components/unidad-cero/topico-dos/topico-dos.component';
import { UnidadCeroTopicoTresComponent } from './components/unidad-cero/topico-tres/topico-tres.component';
import { UnidadCeroTopicoUnoComponent } from './components/unidad-cero/topico-uno/topico-uno.component';
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
    { path: 'estructura-del-curso', component: UnidadCeroTopicoDosComponent },
    { path: 'temario', component: UnidadCeroTopicoTresComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
