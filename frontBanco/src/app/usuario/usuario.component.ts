import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { UsuarioFiltro } from '../negocio/filtro/usuario-filtro';
import { ApoioService } from '../util/apoio.service';
import { Usuario } from '../negocio/model/usuario';
import { Curso } from '../negocio/model/curso';
import { Unidade } from '../negocio/model/unidade';
import { UnidadeCurricular } from '../negocio/model/unidade-curricular';
import { Perfil } from '../negocio/model/perfil';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  filtro:UsuarioFiltro;
  usuario:Usuario;
  curso:Curso;
  unidade:Unidade;
  unidadeCurricular:UnidadeCurricular;
  perfil:Perfil;
  listaUsuario:any[];
  listaSituacao:any[];
  listaPerfis:any[];
  listaCursos:any[];
  listaUnidadesCurriculares:any[];


  listaPerfisSelecionados:any[];
  listaCursosSelecionados:any[];
  listaUnidadesCurricularSelecionados:any[];

  modalCad:boolean;

  constructor(
    private apoioService:ApoioService,
    private usuarioService:UsuarioService
  ) { }

  ngOnInit() {
    this.filtro = new UsuarioFiltro;
    this.getNovaInstancia();
    this.filtro.ativo=true;
    this.listaSituacao = this.apoioService.comboSituacao();
    this.listaPerfis = this.apoioService.carregarComboPerfil();
    this.listaCursos=this.apoioService.carregarComboCursos();
    this.listaUnidadesCurriculares = this.apoioService.carregarComboUnidadedesCurricular();
    this.modalCad=false;

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

  getNovo(){
    this.getNovaInstancia();
    this.getGerenciaModal();
    
  }

  getGerenciaModal(){
    if(this.modalCad == true){
      this.modalCad=false;
    }else{
      this.modalCad=true;
    }
  }
  getNovaInstancia(){
    this.usuario = new Usuario();
    this.curso = new Curso();
    this.unidade=new Unidade();
    this.unidadeCurricular=new UnidadeCurricular();
  }

 

}
