import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MensajeUsuarioComponent } from "./mensaje-usuario/mensaje-usuario.component";
import { SalaComponent } from './sala/sala.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MensajeUsuarioComponent, SalaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chatroom';
  manejarMensaje(evento: { usuario: string, msj: string }) {
    console.log('Mensaje recibido del usuario:', evento.usuario);
    console.log('Contenido del mensaje:', evento.msj);
  }
}
