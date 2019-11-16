import { Component, OnInit } from '@angular/core';
import { CadastrarQuestaoService } from '../cadastrar-questao/cadastrar-questao.service';
import { Usuario } from '../negocio/model/usuario';

@Component({
  selector: 'app-avaliar',
  templateUrl: './avaliar.component.html',
  styleUrls: ['./avaliar.component.css']
})
export class AvaliarComponent implements OnInit {

  usuario:Usuario;
  listaQuestoes:any[];

  previaDiv:boolean;
  idSelecionado:any;


  constructor(
    private questaoService: CadastrarQuestaoService
  ) { }

  ngOnInit() {
    this.usuario =  JSON.parse(localStorage.getItem('usuarioLogado'));
    this.buscarQuestoesAvaliar();
  }


  buscarQuestoesAvaliar(){
    this.questaoService.questoesAvaliar(this.usuario.id)
    .then(response=>{
      this.listaQuestoes = this.getMontarGrid(response);
    })
  }

  publicarQuestao(){
    this.questaoService.publicar(this.idSelecionado)
    .then(response=>{
      console.log('publicou');
      this.buscarQuestoesAvaliar();
      this.voltarPesquisa();
    })
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
    this.previaDiv=true;
    window.scroll(0,0);
}

voltarPesquisa(){
  this.previaDiv = false;
  window.scroll(0,0);
}

}
