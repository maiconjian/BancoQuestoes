import { Component, OnInit } from '@angular/core';
import { Login } from '../negocio/model/login';
import { LoginService } from './login.service';
import { MensagemComponent } from '../mensagem/mensagem.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  dados: Login;

  imageurl: any;
  displayQRCode: boolean;
  msgPrincipalAtivo:boolean;
  codigoQR: any;


  constructor(
    private loginService: LoginService,
    private mensagemComponent:MensagemComponent

  ) { }

  ngOnInit() {
    this.dados = new Login();
    this.displayQRCode = false;
    this.msgPrincipalAtivo=true;
  }

  button() {
    if (this.dados.login != null && this.dados.login != '' && this.dados.senha != null && this.dados.senha != '' ) {
      this.autenticar(this.dados);
    }else{
      this.mensagemComponent.showError('Campo de Login e Senha são Obrigátorios!')
    }

  }

  confirmCodigoAcesso() {
    this.loginService.verificarCodigo(this.dados.login, this.codigoQR)
      .then(response => {
        console.log(response);
        if(response !=null){
          localStorage.setItem('usuarioLogado', JSON.stringify(response));
          this.displayQRCode = false;
        }else{
          this.codigoQR ='';
          this.mensagemComponent.showError('Código de Acesso Inválido!')
        }
        
      })
  }


  autenticar(dadosLogin: any) {
    this.loginService.autenticar(dadosLogin)
      .then(response => {
        if(response.byteLength>0){
          let TYPED_ARRAY = new Uint8Array(response);
          const STRING_CHAR = String.fromCharCode.apply(null, TYPED_ARRAY);
          let base64String = btoa(STRING_CHAR);
          this.imageurl = 'data:image/jpg;base64,' + base64String;
          this.displayQRCode = true;
        }else{
          this.mensagemComponent.showError('Login ou senha Inválidos!')
        }
      })     
  }

  cancelar(){
    this.dados = new Login();
    this.displayQRCode = false;
  }

}
