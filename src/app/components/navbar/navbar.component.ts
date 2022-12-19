import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  @Input() anterior: boolean = true;
  @Input() siguiente: boolean = true; 
  @Input() titulo: string = 'Bienvenido a Introducción a Ingenieria de Sistemas'; 
  @Input() menu: any = []; 
  @Output() anteriorClick = new EventEmitter();
  @Output() siguienteClick = new EventEmitter();

  constructor( private router: Router ) {}

  onClickAnterior(): void{
    this.anteriorClick.emit();
  }

  onClickSiguiente(): void{
    this.siguienteClick.emit();
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('id_usuario');
    this.router.navigateByUrl('/autenticacion');
  }
}
