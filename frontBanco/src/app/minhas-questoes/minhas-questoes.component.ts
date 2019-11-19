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
  idAutor:number;
  idSelecionado: any;

  escolhaDrop:any;

  listaSituacaoQuestao:any[];
  listaQuestoes:any[];

  titulo:string;


  constructor(
    private questaoService:CadastrarQuestaoService,
    private apoioService:ApoioService
  ) { }

  ngOnInit() {
    this.listaSituacaoQuestao = this.apoioService.comboSituacaoQuestao();
    this.usuario= this.usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    this.titulo = "Minhas Questões";
  }


  pesquisar(){
    this.definirFiltro();
    this.questaoService.listarMinhasQuestoes(this.publicado,this.rejeitado,this.usuario.id)
    .then(response =>{
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

  getPreviaModal(id: any) {
    this.idSelecionado = id;
    this.previaDiv = true;
    window.scroll(0, 0);
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
        'autor': lista[i].autor.nome
      }
      listaNova.push(obj);
    }
    return listaNova;
  }

  

}
