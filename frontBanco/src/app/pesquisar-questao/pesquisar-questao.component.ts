import { Component, OnInit } from '@angular/core';
import { ApoioService } from '../util/apoio.service';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { QuestaoFiltro } from '../negocio/filtro/questao-filtro';
import { CadastrarQuestaoService } from '../cadastrar-questao/cadastrar-questao.service';
import { Questao } from '../negocio/model/questao';
import { Alternativa } from '../negocio/model/alternativa';

@Component({
  selector: 'app-pesquisar-questao',
  templateUrl: './pesquisar-questao.component.html',
  styleUrls: ['./pesquisar-questao.component.css']
})
export class PesquisarQuestaoComponent implements OnInit {

  filtro: QuestaoFiltro;
  alternativaA: Alternativa;
  alternativaB: Alternativa;
  alternativaC: Alternativa;
  alternativaD: Alternativa;
  alternativaE: Alternativa;
  questao:Questao;

  listaCursosUsuario: any[];
  listaUnidadesCurricularUsuario: any[];
  listaDificuldade: any[];
  listaQuestoes:any[];

  previaDiv:boolean;
  previaImgEnunciado:boolean;
  previaImgSuporte:boolean;
  
  previaImgEnunciadoUrl:string;
  previaImgSuporteUrl:string;
  titulo:string;



  constructor(
    private apoioService: ApoioService,
    private questaoService: CadastrarQuestaoService,
    private mensagemComponent: MensagemComponent
  ) { }

  ngOnInit() {
    this.filtro = new QuestaoFiltro();
    this.questao = new Questao();
    this.alternativaA = new Alternativa();
    this.alternativaA.correta=false;
    this.alternativaB = new Alternativa();
    this.alternativaB.correta=false;
    this.alternativaC = new Alternativa();
    this.alternativaC.correta=false;
    this.alternativaD = new Alternativa();
    this.alternativaD.correta=false;
    this.alternativaE = new Alternativa();
    this.alternativaE.correta=false;
    this.previaDiv=false;
    this.titulo='Pesquisar Questão';
    this.listaCursosUsuario = this.apoioService.carregarComboCursosUsuario();
    this.listaUnidadesCurricularUsuario = this.apoioService.carregarComboUnidadeCurricularUsuario();
    this.listaDificuldade = this.apoioService.carregarComboDificuldade();
   

  }

  pesquisar() {
    if (this.filtro.curso != null || this.filtro.unidadeCurricular != null) {
      this.questaoService.pesquisar(this.filtro)
        .then(response => {
         this.listaQuestoes = this.getMontarGrid(response);
         if(response.length ==0){
           this.mensagemComponent.showWarn('Nenhum Arquivo encontrado!');
         }
        })
    }else{
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
    this.questao = new Questao();
    this.questaoService.buscarPorId(id)
    .then(response=>{
      this.questao=response;
      this.getImgEnunciado(this.questao.enunciado);
      this.getImgSuporte(this.questao.suporte);
      this.alternativaA = response.alternativaA;
      this.alternativaB = response.alternativaB;
      this.alternativaC = response.alternativaC;
      this.alternativaD = response.alternativaD;
      this.alternativaE = response.alternativaE;
      this.previaDiv=true;
      this.titulo= 'Vizualizar Questão';
    })
  }

  getImgEnunciado(caminho:string){
    this.questaoService.buscarFoto(caminho)
    .then(response =>{
        let TYPED_ARRAY = new Uint8Array(response);
        const STRING_CHAR = String.fromCharCode.apply(null, TYPED_ARRAY);
        let base64String = btoa(STRING_CHAR);
        this.previaImgEnunciadoUrl = 'data:image/jpg;base64,' + base64String;
        this.previaImgEnunciado=false;
    })
    .catch(error=>{
      this.previaImgEnunciado=true;
    })
  }

  getImgSuporte(caminho:string){
    this.questaoService.buscarFoto(caminho)
    .then(response =>{
        let TYPED_ARRAY = new Uint8Array(response);
        const STRING_CHAR = String.fromCharCode.apply(null, TYPED_ARRAY);
        let base64String = btoa(STRING_CHAR);
        this.previaImgSuporteUrl = 'data:image/jpg;base64,' + base64String;
        this.previaImgSuporte=false;
    })
    .catch(error=>{
      this.previaImgSuporte=true;
    })
  }

  voltarPesquisa(){
    this.previaDiv = false;
    this.titulo='Pesquisar Questão';
  }

}
