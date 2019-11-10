import { Component, OnInit } from '@angular/core';
import { ApoioService } from '../util/apoio.service';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { QuestaoFiltro } from '../negocio/filtro/questao-filtro';
import { CadastrarQuestaoService } from '../cadastrar-questao/cadastrar-questao.service';

@Component({
  selector: 'app-pesquisar-questao',
  templateUrl: './pesquisar-questao.component.html',
  styleUrls: ['./pesquisar-questao.component.css']
})
export class PesquisarQuestaoComponent implements OnInit {

  filtro: QuestaoFiltro;

  listaCursosUsuario: any[];
  listaUnidadesCurricularUsuario: any[];
  listaDificuldade: any[];

  listaQuestoes:any[];


  constructor(
    private apoioService: ApoioService,
    private questaoService: CadastrarQuestaoService,
    private mensagemComponent: MensagemComponent
  ) { }

  ngOnInit() {
    this.filtro = new QuestaoFiltro();
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

}
