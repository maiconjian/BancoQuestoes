import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApoioService } from '../util/apoio.service';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { QuestaoFiltro } from '../negocio/filtro/questao-filtro';
import { CadastrarQuestaoService } from '../cadastrar-questao/cadastrar-questao.service';
import { Questao } from '../negocio/model/questao';
import { Alternativa } from '../negocio/model/alternativa';
import { DomSanitizer } from '@angular/platform-browser';
import { Usuario } from '../negocio/model/usuario';

@Component({
  selector: 'app-pesquisar-questao',
  templateUrl: './pesquisar-questao.component.html',
  styleUrls: ['./pesquisar-questao.component.css']
})
export class PesquisarQuestaoComponent implements OnInit {

  filtro: QuestaoFiltro;
  usuario:Usuario;
  // alternativaA: Alternativa;
  // alternativaB: Alternativa;
  // alternativaC: Alternativa;
  // alternativaD: Alternativa;
  // alternativaE: Alternativa;
  // questao:Questao;

  listaCursosUsuario: any[];
  listaUnidadesCurricularUsuario: any[];
  listaDificuldade: any[];
  listaQuestoes:any[];

  previaDiv:boolean;
  // previaImgEnunciado:boolean;
  // previaImgSuporte:boolean;
  
  // previaImgEnunciadoUrl:string;
  // previaImgSuporteUrl:string;
  titulo:string;

  idSelecionado:any;
  displaySpinner: boolean;



  constructor(
    private apoioService: ApoioService,
    private questaoService: CadastrarQuestaoService,
    private mensagemComponent: MensagemComponent
  ) { }

  ngOnInit() {
    this.filtro = new QuestaoFiltro();
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    this.apoioService.adicionarPermissoes(this.usuario);
    this.previaDiv=false;
    this.titulo='Pesquisar Questão';
    this.listaCursosUsuario = this.apoioService.carregarComboCursosUsuario();
    this.listaUnidadesCurricularUsuario = this.apoioService.carregarComboUnidadeCurricularUsuario();
    this.listaDificuldade = this.apoioService.carregarComboDificuldade();
    this.displaySpinner=false;

  }

  pesquisar() {
    this.displaySpinner=true;
    if (this.filtro.curso != null || this.filtro.unidadeCurricular != null) {
      this.questaoService.pesquisar(this.filtro)
        .then(response => {
         this.listaQuestoes = this.getMontarGrid(response);
         this.displaySpinner=false;
         if(response.length ==0){
           this.mensagemComponent.showWarn('Nenhum Arquivo encontrado!');
         }
        })
    }else{
      this.displaySpinner=false;
      this.mensagemComponent.showWarn('Curso ou Unidade Curricular devem estar Preenchidos');
    }
  }

  getMontarGrid(lista:any){
    let listaNova:any[]=[];
    for (let i = 0; i < lista.length; i++) {
      let obj={
        'id':lista[i].id,
        'objetoConhecimento':lista[i].objetoConhecimento,
        'capacidade':lista[i].capacidade,
        'unidadeCurricular':lista[i].unidadeCurricular.nome,
        'autor':lista[i].autor.nome
      }
      listaNova.push(obj);
    }
    return listaNova;
  }



    getPreviaModal(id:any){
      this.idSelecionado=id;
      this.displaySpinner=true;
      
      setTimeout(() => {
        this.displaySpinner=false;
        window.scroll(0,0);
        this.previaDiv = true;
      }, 1000);
  }



  voltarPesquisa(){
    this.previaDiv = false;
    this.titulo='Pesquisar Questão';
    window.scroll(0,0);
  }

}
