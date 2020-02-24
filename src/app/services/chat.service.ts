import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public webSocketService: WebsocketService) { }

  sendMessage(mensaje: string){
    const payload = {
      de: 'Fernando',
      cuerpo: mensaje
    };
    this.webSocketService.emit('mensaje', payload);
  }

  getMessages(){
    return this.webSocketService.listen('mensaje-nuevo');
  }
}
