import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { UsuarioFiltro } from '../negocio/filtro/usuario-filtro';
import { ApoioService } from '../util/apoio.service';
import { Usuario } from '../negocio/model/usuario';
import { Curso } from '../negocio/model/curso';
import { Unidade } from '../negocio/model/unidade';
import { UnidadeCurricular } from '../negocio/model/unidade-curricular';
import { Perfil } from '../negocio/model/perfil';
import { MensagemComponent } from '../mensagem/mensagem.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  filtro:UsuarioFiltro;
  usuario:Usuario;
  usuarioLogado:Usuario;
  curso:Curso;
  unidade:Unidade;
  unidadeCurricular:UnidadeCurricular;
  perfil:Perfil;
  listaUsuario:any[];
  listaSituacao:any[];
  listaPerfis:any[];
  listaCursos:any[];
  listaUnidadesCurriculares:any[];
  listaUnidades:any[];

  tituloModal:string;


  listaPerfisSelecionados:any[];
  listaUnidadesCurricularSelecionados:any[];

  modalCad:boolean;
  msgPrincipalAtivo:boolean;
  displaySpinner:boolean;

  

  constructor(
    private apoioService:ApoioService,
    private usuarioService:UsuarioService,
    private mensagemComponent:MensagemComponent
  ) { }

  
  ngOnInit() {
    this.usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    this.apoioService.adicionarPermissoes(this.usuarioLogado);
    this.filtro = new UsuarioFiltro;
    this.getNovaInstancia();
    this.filtro.ativo=true;
    this.listaSituacao = this.apoioService.comboSituacao();
    this.listaPerfis = this.apoioService.carregarComboPerfil();
    this.listaCursos=this.apoioService.carregarComboCursos();
    this.listaUnidades = this.apoioService.carregarUnidade();
    this.listaUnidadesCurriculares = this.apoioService.carregarComboUnidadedesCurricular();
    this.modalCad=false;
    this.msgPrincipalAtivo=true;
    this.displaySpinner=false;

  }

  pesquisar(){
    this.displaySpinner=true;
    this.usuarioService.pesquisar(this.filtro)
    .then(response=>{
      this.listaUsuario = response;
      this.displaySpinner=false;
    })
  }

  limparFiltro(){
    this.filtro = new UsuarioFiltro();
    this.filtro.ativo=true;
  }

  getNovo(){
    this.getNovaInstancia();
    this.getGerenciaModal();
    this.tituloModal = 'Incluir Usuário'
  }

  getEditar(usuario:any){
    this.getNovaInstancia();
    this.tituloModal = 'Alterar Usuário'
    console.log(usuario);
    this.usuario.id = usuario.id;
    this.usuario.matricula=usuario.matricula;
    this.usuario.nome = usuario.nome;
    this.usuario.login=usuario.login;
    this.usuario.senha=usuario.senha;
    this.usuario.email=usuario.email;
    this.usuario.ativo=usuario.ativo;
    this.unidade = usuario.unidade;
    this.usuario.unidade = this.unidade;
    this.curso.id =1;
   // this.carregarUnidadesCurricular();
    this.listaUnidadesCurricularSelecionados = usuario.unidadesCurricular;
    this.listaPerfisSelecionados=usuario.perfis;
    console.log(usuario);
    this.getGerenciaModal();
  }

  merge(){
    this.displaySpinner=true;
    this.usuario.unidade = this.unidade;
    this.usuario.perfis = this.listaPerfisSelecionados;
    this.usuario.unidadesCurricular = this.listaUnidadesCurricularSelecionados;
    if(this.usuario.id == null){
      this.usuarioService.incluir(this.usuario)
      .then(response=>{
        this.mensagemComponent.showSuccess('Cadastro Realizado com Sucesso!');
        this.pesquisar();
        this.getGerenciaModal();
        this.displaySpinner=false;
      });
    }else{
      this.usuarioService.alterar(this.usuario)
      .then(ressponse=>{
        this.mensagemComponent.showSuccess('Alteração realizada com Sucesso!');
        this.pesquisar();
        this.getGerenciaModal();
        this.displaySpinner=false;
      })
    }
  }

  getGerenciarSituacaoUsuario(usuario:any){
    this.getNovaInstancia();
    this.usuario = usuario;
    if(this.usuario.ativo){
      this.mensagemComponent.showConfirm('Deseja Desativar esse Usuario?','');
    }else{
      this.mensagemComponent.showConfirm('Deseja Ativar esse Usuario?','');
    }
  }

  setOpcao(event: any) {
    if (event == 1) {
      this.displaySpinner=true;
      let msg:string;
      if(this.usuario.ativo){
        this.usuario.ativo = false;
         msg = 'Usuario Desativado com Sucesso!!';
      }else{
        this.usuario.ativo = true;
        msg ='Usuario Ativado com Sucesso!!';
      }

      this.usuarioService.alterar(this.usuario)
      .then(response=>{
        this.displaySpinner=false;
        this.mensagemComponent.showSuccess(msg);
        this.pesquisar();
      })
    } else if (event == 0) {
      this.getNovaInstancia();
      this.mensagemComponent.showWarn('Ação Cancelada! ');
    }
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
    this.usuario.ativo = true;
    this.curso = new Curso();
    this.unidade=new Unidade();
    this.unidadeCurricular=new UnidadeCurricular();
    this.listaPerfisSelecionados=[];
    this.listaUnidadesCurricularSelecionados=[];
  }
  getToolTipSituacao(ativo: boolean) {
    if (ativo) {
      return 'Desativar';
    } else {
      return 'Ativar';
    }
  }

  getIconSituacao(ativo: boolean) {
    if (ativo) {
      return 'fas fa-times';
    } else {
      return 'fas fa-check';
    }
  }

  getblockButton(){
    if(this.usuario.nome == null || this.usuario.nome=='' || this.usuario.email == null || this.usuario.email ==''||
      this.usuario.matricula ==null  || this.usuario.login == null || this.usuario.login==''||
      this.listaPerfisSelecionados.length ==0 || this.listaUnidadesCurricularSelecionados.length==0 || this.unidade == null){
        return true;
      }
      else{
        return false;
      }
  }
}
