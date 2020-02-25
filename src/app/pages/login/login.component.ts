import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public nombre: string = "";

  constructor(public webSocketService: WebsocketService, private router: Router) { }

  ngOnInit(): void {
  }

  ingresar(){
    console.log(this.nombre);
    this.webSocketService.loginWs(this.nombre)
    .then(()=>{
      this.router.navigateByUrl('/mensajes');
    }).catch(e=>{
      console.log(e);
    });
  }

}
