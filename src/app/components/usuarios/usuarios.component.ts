import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class UsuariosComponent {
  estudianteDialog: boolean = false;
  estudiantes: any[] = [];

  constructor(private estudianteService: EstudiantesService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.estudianteService.getEstudiante().subscribe(
      response => {
        console.log(response);
        this.estudiantes = response.usuarios;
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrio un error en el servidor', life: 3000 });
      }
    );
    this.obtenerCalificaciones(14, 1);
  }

  obtenerCalificaciones(id_estudiante: number, id_tema: number): Observable<any> {
    const calificacion = new Subject<any>();
    this.estudianteService.getCalificacion(id_estudiante, id_tema).subscribe(
      response => { 
        console.log(response);
        calificacion.next(response);
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrio un error en el servidor', life: 3000 });
      }
    );
    return calificacion;
  }

  openNew() {
    this.estudianteDialog = true;
  }

  saveProduct() {

    /* if (this.estudiante.name.trim()) {
      if (this.estudiante.id) {
        this.products[this.findIndexById(this.estudiante.id)] = this.estudiante;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'estudiante Updated', life: 3000 });
      }
      else {
        this.estudiante.id = this.createId();
        this.estudiante.image = 'estudiante-placeholder.svg';
        this.products.push(this.estudiante);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'estudiante Created', life: 3000 });
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.estudiante = {};
    } */
  }

}
