import { Component } from '@angular/core';
import { MensajeUsuarioComponent } from '../mensaje-usuario/mensaje-usuario.component';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeUsuarioComponent],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  manejarMensaje(evento: { usuario: string, msj: string }) {
    console.log('Mensaje recibido del usuario:', evento.usuario);
    console.log('Contenido del mensaje:', evento.msj);
  }
}
