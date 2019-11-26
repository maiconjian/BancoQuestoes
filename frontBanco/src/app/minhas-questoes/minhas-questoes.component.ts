import { Component, OnInit } from '@angular/core';
import { CadastrarQuestaoService } from '../cadastrar-questao/cadastrar-questao.service';
import { ApoioService } from '../util/apoio.service';
import { Usuario } from '../negocio/model/usuario';

@Component({
  selector: 'app-minhas-questoes',
  templateUrl: './minhas-questoes.component.html',
  styleUrls: ['./minhas-questoes.component.css']
})
export class MinhasQuestoesComponent implements OnInit {

  usuario:Usuario;
  publicado:boolean;
  rejeitado:boolean;
  previaDiv: boolean;
  modalObservacao:boolean;
  observacao:string;
  idAutor:number;
  idSelecionado: any;
  escolhaDrop:any;

  listaSituacaoQuestao:any[];
  listaQuestoes:any[];

  titulo:string;
  displaySpinner: boolean;


  constructor(
    private questaoService:CadastrarQuestaoService,
    private apoioService:ApoioService
  ) { }

  ngOnInit() {
    this.listaSituacaoQuestao = this.apoioService.comboSituacaoQuestao();
    this.usuario= this.usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    this.apoioService.adicionarPermissoes(this.usuario);
    this.titulo = "Minhas Questões";
    this.modalObservacao=false;
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    this.apoioService.adicionarPermissoes(this.usuario);
    this.displaySpinner=false;
  }


  pesquisar(){
    this.displaySpinner=true;
    this.definirFiltro();
    this.questaoService.listarMinhasQuestoes(this.publicado,this.rejeitado,this.usuario.id)
    .then(response =>{
      this.displaySpinner=false;
      this.listaQuestoes = this.getMontarGrid(response);
    })
  }

  definirFiltro(){
    if(this.escolhaDrop == "publicado"){
      this.publicado = true;
      this.rejeitado=false;
      this.titulo = "Minhas Questões Publicadas"
    }else if(this.escolhaDrop == "analise"){
      this.publicado = false;
      this.rejeitado=false;
      this.titulo = "Minhas Questões Em Análise"
    }else if(this.escolhaDrop == "rejeitado"){
      this.publicado = false;
      this.rejeitado=true;
      this.titulo =  "Minhas Questões Rejeitadas"
    }
  }

  getObservacao(questao:any){
    this.observacao = questao.observacao;
    this.modalObservacao=true;
    console.log(questao);
  }

  getPreviaModal(id: any) {
    this.displaySpinner=true;
    this.idSelecionado = id;
    setTimeout(() => {
      this.displaySpinner=false;
      window.scroll(0, 0);
      this.previaDiv = true;
    }, 1000);
  }

  voltarPesquisa() {
    this.previaDiv = false;
    window.scroll(0, 0);
  }

  getMontarGrid(lista: any) {
    let listaNova: any[] = [];
    for (let i = 0; i < lista.length; i++) {
      let obj = {
        'id': lista[i].id,
        'objetoConhecimento': lista[i].objetoConhecimento,
        'capacidade': lista[i].capacidade,
        'unidadeCurricular': lista[i].unidadeCurricular.nome,
        'autor': lista[i].autor.nome,
        'rejeitado': lista[i].rejeitado,
        'observacao': lista[i].observacao
      }
      listaNova.push(obj);
    }
    return listaNova;
  }

  

}
