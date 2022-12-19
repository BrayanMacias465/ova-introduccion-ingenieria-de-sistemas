import { Component } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor( private authService: AutenticacionService ) {}

  ngOnInit() {
    console.log(this.authService.isAuthenticated(['Maestro']));
  }
}
