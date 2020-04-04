import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  constructor(public webSocketService: WebsocketService) { }

  ngOnInit(): void {
  }

  salir(){
    this.webSocketService.logoutWs();
  }

}