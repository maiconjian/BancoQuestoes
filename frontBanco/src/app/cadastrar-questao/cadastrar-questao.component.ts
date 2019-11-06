import { Component, OnInit } from '@angular/core';
import { ApoioService } from '../util/apoio.service';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { Questao } from '../negocio/model/questao';
import { Alterntiva } from '../negocio/model/alternativa';

@Component({
  selector: 'app-cadastrar-questao',
  templateUrl: './cadastrar-questao.component.html',
  styleUrls: ['./cadastrar-questao.component.css']
})
export class CadastrarQuestaoComponent implements OnInit {

  questao: Questao;
  alternativaA: Alterntiva;
  alternativaB: Alterntiva;
  alternativaC: Alterntiva;
  alternativaD: Alterntiva;
  alternativaE: Alterntiva;

  previwEnunciadoFile: any;
  previwSuporteFile: any;
  tituloComponent:string;

  listaAlternativaBlock: any[];
  listaDificuldade:any[];
  listaCapacidade:any[];

  constructor(
    private apoioService: ApoioService,
    private mensagemComponent: MensagemComponent
  ) { }

  ngOnInit() {
    this.getIniciarInstancia();
    this.listaDificuldade = this.apoioService.carregarComboDificuldade();
    this.listaCapacidade=this.apoioService.carregarComboCapacidade();
    this.listaAlternativaBlock = [
      { label: "alternativaA", value: false },
      { label: "alternativaB", value: false },
      { label: "alternativaC", value: false },
      { label: "alternativaD", value: false },
      { label: "alternativaE", value: false }
    ]

  }

  onSelectEnunciado(event) {
    this.previewEnunciado(event.target.files[0]);
    console.log(event);
  }

  onSelectSuporte(event) {
    this.previewSuporte(event.target.files[0]);
    console.log(event);
  }

  previewEnunciado(foto: any) {
    var mimeType = foto.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(foto);
    reader.onload = (_event) => {
      this.previwEnunciadoFile = reader.result;
    }
  }

  previewSuporte(foto: any) {
    var mimeType = foto.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(foto);
    reader.onload = (_event) => {
      this.previwSuporteFile = reader.result;
    }
  }


  getTextAreaEnunciado(inputFile: any) {
    this.previwEnunciadoFile = null;
    inputFile.value = "";
  }

  getTextAreaSuporte(inputFile: any) {
    this.previwSuporteFile = null;
    inputFile.value = "";
  }

  getFotoEnunciado() {
    if (this.previwEnunciadoFile != null) {
      return true;
    } else {
      return false;
    }
  }

  getFotoSuporte() {
    if (this.previwSuporteFile != null) {
      return true;
    } else {
      return false;
    }
  }


  getIniciarInstancia() {
    this.questao = new Questao();
    this.alternativaA = new Alterntiva();
    this.alternativaB = new Alterntiva();
    this.alternativaC = new Alterntiva();
    this.alternativaD = new Alterntiva();
    this.alternativaE = new Alterntiva();
  }


  configBotaoAlternativa(alternativa: any) {
    if (alternativa.correta == true) {
      for (let i = 0; i < this.listaAlternativaBlock.length; i++) {
        if (alternativa.name != this.listaAlternativaBlock[i].label) {
          this.listaAlternativaBlock[i].value = true;
        }
      }
    } else if (alternativa.correta == false) {
      for (let i = 0; i < this.listaAlternativaBlock.length; i++) {
        if (alternativa.name != this.listaAlternativaBlock[i].label) {
          this.listaAlternativaBlock[i].value = false;
        }
      }
    }
  }

  getTooltipAlternativa(alternativa:any){
    if(alternativa.correta ==true){
      return 'Correta!';
    }else{
      return 'Incorreta!';
    }
  }

}
