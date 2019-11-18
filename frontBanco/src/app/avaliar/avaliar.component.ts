import { Component, OnInit } from '@angular/core';
import { CadastrarQuestaoService } from '../cadastrar-questao/cadastrar-questao.service';
import { Usuario } from '../negocio/model/usuario';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { RejeitadoDto } from '../negocio/dto/rejeitadoDto';

@Component({
  selector: 'app-avaliar',
  templateUrl: './avaliar.component.html',
  styleUrls: ['./avaliar.component.css']
})
export class AvaliarComponent implements OnInit {

  usuario: Usuario;
  rejeitado:RejeitadoDto;
  listaQuestoes: any[];

  previaDiv: boolean;
  modalOb:boolean;
  block:boolean;
  idSelecionado: any;


  constructor(
    private questaoService: CadastrarQuestaoService,
    private mensagemComponent: MensagemComponent
  ) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    this.buscarQuestoesAvaliar();
    this.rejeitado = new RejeitadoDto();
    this.modalOb=false;
    this.block=false;
  }


  buscarQuestoesAvaliar() {
    this.questaoService.questoesAvaliar(this.usuario.id)
      .then(response => {
        this.listaQuestoes = this.getMontarGrid(response);
      })
  }

  publicarQuestao() {
    this.questaoService.publicar(this.idSelecionado)
      .then(response => {
        console.log('publicou');
        this.buscarQuestoesAvaliar();
        this.mensagemComponent.showSuccess('Questão Publicada!');
        this.voltarPesquisa();
      })
  }

  rejeitar(){
    this.mensagemComponent.showConfirm('Rejeitar Questão ?','');
    this.block=true;
    //window.scroll(0, 0);
  }

  setOpcao(event:any){
    if(event == 1){
     this.rejeitado.idQuestao = this.idSelecionado;
     this.questaoService.rejeitar(this.rejeitado)
    .then(response => {
      this.buscarQuestoesAvaliar();
      this.mensagemComponent.showSuccess('Questão Rejeitada!');
      this.fecharModalObservacao();
      this.previaDiv = false;
    })
    }else{
      this.mensagemComponent.showWarn('Ação Cancelada!');
      window.scroll(0, 0);
      this.modalOb = false; 
    }
   
    this.block=false;
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

  getPreviaModal(id: any) {
    this.idSelecionado = id;
    this.previaDiv = true;
    window.scroll(0, 0);
  }

 

  voltarPesquisa() {
    this.previaDiv = false;
    window.scroll(0, 0);
  }

  fecharModalObservacao(){
    this.rejeitado.observacao='';
    this.modalOb = false;
    
  }

}
