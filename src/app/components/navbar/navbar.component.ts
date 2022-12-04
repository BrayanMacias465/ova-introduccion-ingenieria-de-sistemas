import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  onClickAnterior(): void{
    this.anteriorClick.emit();
  }

  onClickSiguiente(): void{
    this.siguienteClick.emit();
  }
}
