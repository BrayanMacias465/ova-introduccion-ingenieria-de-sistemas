import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticacionComponent } from './components/autenticacion/autenticacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UnidadUnoTopicoUnoComponent } from './components/unidad-uno/topico-uno/topico-uno.component';
import { UnidadCeroTopicoUnoComponent } from './components/unidad-cero/topico-uno/topico-uno.component';
import { UnidadCeroTopicoDosComponent } from './components/unidad-cero/topico-dos/topico-dos.component';
import { UnidadCeroTopicoTresComponent } from './components/unidad-cero/topico-tres/topico-tres.component';

@NgModule({
  declarations: [
    AppComponent,
    AutenticacionComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    UnidadUnoTopicoUnoComponent,
    UnidadCeroTopicoUnoComponent,
    UnidadCeroTopicoDosComponent,
    UnidadCeroTopicoTresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
