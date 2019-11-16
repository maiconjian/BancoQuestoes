import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Alternativa } from '../negocio/model/alternativa';
import { Questao } from '../negocio/model/questao';
import { CadastrarQuestaoService } from '../cadastrar-questao/cadastrar-questao.service';

@Component({
  selector: 'app-visualizar-questao',
  templateUrl: './visualizar-questao.component.html',
  styleUrls: ['./visualizar-questao.component.css']
})
export class VisualizarQuestaoComponent implements OnInit {

  alternativaA: Alternativa;
  alternativaB: Alternativa;
  alternativaC: Alternativa;
  alternativaD: Alternativa;
  alternativaE: Alternativa;
  questao: Questao;


  previaImgEnunciado: boolean;
  previaImgSuporte: boolean;

  previaImgEnunciadoUrl: string;
  previaImgSuporteUrl: string;

  @Input() idSelecionado: any;

  constructor(
    private questaoService: CadastrarQuestaoService
  ) { }

  ngOnInit() {
    this.questao = new Questao();
    this.alternativaA = new Alternativa();
    this.alternativaA.correta = false;
    this.alternativaB = new Alternativa();
    this.alternativaB.correta = false;
    this.alternativaC = new Alternativa();
    this.alternativaC.correta = false;
    this.alternativaD = new Alternativa();
    this.alternativaD.correta = false;
    this.alternativaE = new Alternativa();
    this.alternativaE.correta = false;
    this.previaImgEnunciado = false;
    this.previaImgSuporte = false;
  }
  ngOnChanges(changes: SimpleChanges) {
    //console.log(changes['idSelecionado'].currentValue);
    if (this.idSelecionado > 0) {
      this.getPreviaModal(this.idSelecionado);
    }
  }


  getPreviaModal(id: any) {
    this.questao = new Questao();
    this.questaoService.buscarPorId(id)
      .then(response => {
        this.questao = response;
        this.getImgEnunciado(this.questao.enunciado);
        this.getImgSuporte(this.questao.suporte);
        this.alternativaA = response.alternativaA;
        this.alternativaB = response.alternativaB;
        this.alternativaC = response.alternativaC;
        this.alternativaD = response.alternativaD;
        this.alternativaE = response.alternativaE;
        //this.previaDiv=true;
        //this.titulo= 'Visualizar Questão';
      })
  }

  getImgEnunciado(caminho: string) {
    this.questaoService.buscarFoto(caminho)
      .then(response => {
        //console.log(response.byteLength);
        let TYPED_ARRAY = new Uint8Array(response);
        //const STRING_CHAR = String.fromCharCode.apply(null, TYPED_ARRAY);
        const STRING_CHAR = TYPED_ARRAY.reduce((data, byte) => {
          return data + String.fromCharCode(byte);
        }, '');
        let base64String = btoa(STRING_CHAR);
        if (base64String != '') {
          this.previaImgEnunciadoUrl = 'data:image/jpg;base64,' + base64String;
          this.previaImgEnunciado = false;
        } else {
          this.previaImgEnunciado = true;
        }
      })
  }

  getImgSuporte(caminho: string) {
    this.questaoService.buscarFoto(caminho)
      .then(response => {
        let TYPED_ARRAY = new Uint8Array(response);
        //const STRING_CHAR = String.fromCharCode.apply(null,TYPED_ARRAY);
        const STRING_CHAR = TYPED_ARRAY.reduce((data, byte) => {
          return data + String.fromCharCode(byte);
        }, '');
        let base64String = btoa(STRING_CHAR);

        if (base64String != '') {
          this.previaImgSuporteUrl = 'data:image/jpg;base64,' + base64String;
          this.previaImgSuporte = false;
        } else {
          this.previaImgSuporte = true;
        }
      })
  }
}
