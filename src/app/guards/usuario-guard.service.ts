import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { WebsocketService } from '../services/websocket.service';
@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {

  constructor(public webSocketService: WebsocketService, private router: Router) { 

  }

  canActivate() {
    if (this.webSocketService.getUsuario()) {
      return true;
    } else {
      this.router.navigateByUrl('/');
      return false;
    }
  }

}
