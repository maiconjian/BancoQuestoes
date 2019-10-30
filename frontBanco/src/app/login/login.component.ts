import { Component, OnInit } from '@angular/core';
import { Login } from '../negocio/model/login';
import { LoginService } from './login.service';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { Router } from '@angular/router';


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
    private mensagemComponent:MensagemComponent,
    private router:Router
  ) { }

  currentUser = this.loginService.currentUser;

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
        if(response !=null){
          localStorage.setItem('usuarioLogado', JSON.stringify(response));
        
          this.displayQRCode = false;
          this.router.navigateByUrl('/usuario')
          
          this.adicionarPermissoes(response);
        }else{
          this.codigoQR ='';
          this.mensagemComponent.showError('Código de Acesso Inválido!')
        }
        
      })
  }

  adicionarPermissoes(response:any){
    let perfis:any[]=[];
    for (let i = 0; i < response.perfis.length; i++) {
      perfis.push(response.perfis[i].nome);
    }
    console.log(perfis)
      let user = {
      username: response.nome,
      permissions: perfis
    }
    console.log(user);
    this.loginService.setUser(user);
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
