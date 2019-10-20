import { Component, OnInit } from '@angular/core';
import { Login } from '../negocio/model/login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  dados:Login;

  imageurl:any;
  displayQRCode:boolean;
  codigoQR:any;


  constructor(
    private loginService:LoginService

  ) { }

  ngOnInit() {
    this.dados =new Login();
    this.displayQRCode = false;
  }

  button(){
    this.displayQRCode=true;
    this.autenticar(this.dados);
    console.log(this.dados);
  }

  confirmCodigoAcesso(){
    this.loginService.verificarCodigo(this.dados.login,this.codigoQR)
    .then(response=>{
      console.log(response);
      this.displayQRCode=false;
    })
  }

 
  autenticar(dadosLogin:any){
    this.loginService.autenticar(dadosLogin)
    .then(response=>{
      let TYPED_ARRAY = new Uint8Array(response);
      const STRING_CHAR = String.fromCharCode.apply(null, TYPED_ARRAY);
      let base64String = btoa(STRING_CHAR);
      this.imageurl = 'data:image/jpg;base64,' + base64String;
    });
  }

}
