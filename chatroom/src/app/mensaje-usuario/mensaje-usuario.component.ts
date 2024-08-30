import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje-usuario.component.html',
  styleUrl: './mensaje-usuario.component.css'
})
export class MensajeUsuarioComponent {
  msj: string = '';
  @Input() usuario: string = "";

  @Output() outputMsj = new EventEmitter<{usuario:string, msj:string}>();

  emitirMsj()
  {
    this.outputMsj.emit({usuario:this.usuario, msj:this.msj});
  }
}
