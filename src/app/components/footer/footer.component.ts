import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  @Input() anterior: boolean = true;
  @Input() siguiente: boolean = true; 
  @Output() anteriorClick = new EventEmitter();
  @Output() siguienteClick = new EventEmitter();

  onClickAnterior(): void{
    this.anteriorClick.emit();
  }

  onClickSiguiente(): void{
    this.siguienteClick.emit();
  }

}
