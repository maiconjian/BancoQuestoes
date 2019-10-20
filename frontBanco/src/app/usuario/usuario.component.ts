import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { UsuarioFiltro } from '../negocio/filtro/usuario-filtro';
import { ApoioService } from '../util/apoio.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  filtro:UsuarioFiltro;
  listaUsuario:any[];
  listaSituacao:any[];

  constructor(
    private apoioService:ApoioService,
    private usuarioService:UsuarioService
  ) { }

  ngOnInit() {
    this.filtro = new UsuarioFiltro;
    this.filtro.ativo=true;
    this.listaSituacao = this.apoioService.comboSituacao();
  }

  pesquisar(){
    this.usuarioService.pesquisar(this.filtro)
    .then(response=>{
      this.listaUsuario = response;
    })
  }


  limparFiltro(){
    this.filtro = new UsuarioFiltro();
    this.filtro.ativo=true;
  }


}
