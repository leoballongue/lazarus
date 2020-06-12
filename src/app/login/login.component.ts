import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  model = new Login('', '');

  onSubmit() {
    console.log('Dirección Email: ' + this.model.usuario + ', Contraseña: ' + this.model.contraseña);

  }
  ngOnInit(): void {
  }

}
