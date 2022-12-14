import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
import { UnidadUnoTopicoDosComponent } from './components/unidad-uno/topico-dos/topico-dos.component';
import { UnidadUnoTopicoTresComponent } from './components/unidad-uno/topico-tres/topico-tres.component';
import { UnidadUnoTopicoCuatroComponent } from './components/unidad-uno/topico-cuatro/topico-cuatro.component';
import { UnidadUnoTopicoCincoComponent } from './components/unidad-uno/topico-cinco/topico-cinco.component';
import { UnidadDosTopicoUnoComponent } from './components/unidad-dos/topico-uno/topico-uno.component';
import { UnidadDosTopicoDosComponent } from './components/unidad-dos/topico-dos/topico-dos.component';
import { UnidadDosTopicoTresComponent } from './components/unidad-dos/topico-tres/topico-tres.component';
import { UnidadDosTopicoCuatroComponent } from './components/unidad-dos/topico-cuatro/topico-cuatro.component';
import { UnidadDosTopicoCincoComponent } from './components/unidad-dos/topico-cinco/topico-cinco.component';
import { UnidadDosTopicoSeisComponent } from './components/unidad-dos/topico-seis/topico-seis.component';
import { UnidadTresTopicoUnoComponent } from './components/unidad-tres/topico-uno/topico-uno.component';
import { UnidadTresTopicoDosComponent } from './components/unidad-tres/topico-dos/topico-dos.component';
import { UnidadTresTopicoTresComponent } from './components/unidad-tres/topico-tres/topico-tres.component';
import { UnidadTresTopicoCuatroComponent } from './components/unidad-tres/topico-cuatro/topico-cuatro.component';
import { UnidadTresTopicoCincoComponent } from './components/unidad-tres/topico-cinco/topico-cinco.component';
import { UnidadTresTopicoSeisComponent } from './components/unidad-tres/topico-seis/topico-seis.component';
import { UnidadTresTopicoSieteComponent } from './components/unidad-tres/topico-siete/topico-siete.component';
import { UnidadTresTopicoOchoComponent } from './components/unidad-tres/topico-ocho/topico-ocho.component';
import { UnidadTresTopicoNueveComponent } from './components/unidad-tres/topico-nueve/topico-nueve.component';
import { UnidadTresTopicoDiezComponent } from './components/unidad-tres/topico-diez/topico-diez.component';
import { UnidadTresTopicoOnceComponent } from './components/unidad-tres/topico-once/topico-once.component';
import { UnidadTresTopicoDoceComponent } from './components/unidad-tres/topico-doce/topico-doce.component';
import { UnidadTresTopicoTreceComponent } from './components/unidad-tres/topico-trece/topico-trece.component';
import { UnidadTresTopicoCatorceComponent } from './components/unidad-tres/topico-catorce/topico-catorce.component';
import { UnidadTresTopicoTresDosComponent } from './components/unidad-tres/topico-tres-dos/topico-tres-dos.component';
import { UnidadTresTopicoTresTresComponent } from './components/unidad-tres/topico-tres-tres/topico-tres-tres.component';
import { UnidadTresTopicoTresCuatroComponent } from './components/unidad-tres/topico-tres-cuatro/topico-tres-cuatro.component';
import { UnidadTresTopicoTresCincoComponent } from './components/unidad-tres/topico-tres-cinco/topico-tres-cinco.component';
import { UnidadCuatroTopicoUnoComponent } from './components/unidad-cuatro/topico-uno/topico-uno.component';
import { UnidadCuatroTopicoDosComponent } from './components/unidad-cuatro/topico-dos/topico-dos.component';
import { UnidadCuatroTopicoTresComponent } from './components/unidad-cuatro/topico-tres/topico-tres.component';
import { UnidadCuatroTopicoCuatroComponent } from './components/unidad-cuatro/topico-cuatro/topico-cuatro.component';
import { UnidadCuatroTopicoCincoComponent } from './components/unidad-cuatro/topico-cinco/topico-cinco.component';
import { UnidadCuatroTopicoSeisComponent } from './components/unidad-cuatro/topico-seis/topico-seis.component';
import { UnidadCuatroTopicoSieteComponent } from './components/unidad-cuatro/topico-siete/topico-siete.component';
import { UnidadCincoTopicoCincoComponent } from './components/unidad-cinco/topico-cinco/topico-cinco.component';
import { UnidadCincoTopicoCuatroComponent } from './components/unidad-cinco/topico-cuatro/topico-cuatro.component';
import { UnidadCincoTopicoDosComponent } from './components/unidad-cinco/topico-dos/topico-dos.component';
import { UnidadCincoTopicoSeisComponent } from './components/unidad-cinco/topico-seis/topico-seis.component';
import { UnidadCincoTopicoSieteComponent } from './components/unidad-cinco/topico-siete/topico-siete.component';
import { UnidadCincoTopicoTresComponent } from './components/unidad-cinco/topico-tres/topico-tres.component';
import { UnidadCincoTopicoUnoComponent } from './components/unidad-cinco/topico-uno/topico-uno.component';
import { ActividadUnoComponent } from './components/unidad-uno/actividad/actividad.component';
import { ActividadDosComponent } from './components/unidad-dos/actividad/actividad.component';
import { ActividadTresComponent } from './components/unidad-tres/actividad/actividad.component';
import { ActividadCuatroComponent } from './components/unidad-cuatro/actividad/actividad.component';
import { ActividadCincoComponent } from './components/unidad-cinco/actividad/actividad.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizUnoComponent } from './components/unidad-uno/quiz/quiz.component';
import { QuizDosComponent } from './components/unidad-dos/quiz/quiz.component';
import { QuizTresComponent } from './components/unidad-tres/quiz/quiz.component';
import { QuizCuatroComponent } from './components/unidad-cuatro/quiz/quiz.component';
import { QuizCincoComponent } from './components/unidad-cinco/quiz/quiz.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

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
    UnidadCeroTopicoTresComponent,
    UnidadUnoTopicoDosComponent,
    UnidadUnoTopicoTresComponent,
    UnidadUnoTopicoCuatroComponent,
    UnidadUnoTopicoCincoComponent,
    UnidadDosTopicoUnoComponent,
    UnidadDosTopicoDosComponent,
    UnidadDosTopicoTresComponent,
    UnidadDosTopicoCuatroComponent,
    UnidadDosTopicoCincoComponent,
    UnidadDosTopicoSeisComponent,
    UnidadTresTopicoUnoComponent,
    UnidadTresTopicoDosComponent,
    UnidadTresTopicoTresComponent,
    UnidadTresTopicoCuatroComponent,
    UnidadTresTopicoCincoComponent,
    UnidadTresTopicoSeisComponent,
    UnidadTresTopicoSieteComponent,
    UnidadTresTopicoOchoComponent,
    UnidadTresTopicoNueveComponent,
    UnidadTresTopicoDiezComponent,
    UnidadTresTopicoOnceComponent,
    UnidadTresTopicoDoceComponent,
    UnidadTresTopicoTreceComponent,
    UnidadTresTopicoCatorceComponent,
    UnidadTresTopicoTresDosComponent,
    UnidadTresTopicoTresTresComponent,
    UnidadTresTopicoTresCuatroComponent,
    UnidadTresTopicoTresCincoComponent,
    UnidadCuatroTopicoUnoComponent,
    UnidadCuatroTopicoDosComponent,
    UnidadCuatroTopicoTresComponent,
    UnidadCuatroTopicoCuatroComponent,
    UnidadCuatroTopicoCincoComponent,
    UnidadCuatroTopicoSeisComponent,
    UnidadCuatroTopicoSieteComponent,
    UnidadCincoTopicoUnoComponent,
    UnidadCincoTopicoDosComponent,
    UnidadCincoTopicoTresComponent,
    UnidadCincoTopicoCuatroComponent,
    UnidadCincoTopicoCincoComponent,
    UnidadCincoTopicoSeisComponent,
    UnidadCincoTopicoSieteComponent,
    ActividadUnoComponent,
    ActividadDosComponent,
    ActividadTresComponent,
    ActividadCuatroComponent,
    ActividadCincoComponent,
    QuizUnoComponent,
    QuizDosComponent,
    QuizTresComponent,
    QuizCuatroComponent,
    QuizCincoComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
