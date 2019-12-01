import { Component, OnInit } from '@angular/core';
import { ApoioService } from '../util/apoio.service';
import { Usuario } from '../negocio/model/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario:Usuario;


  constructor(
    private apoioService:ApoioService
  ) { }

  ngOnInit() {
    //this.apoioService.bloquearAcessoNaoAutorizado();
    this.usuario= this.usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    this.apoioService.adicionarPermissoes(this.usuario);
  }

}
