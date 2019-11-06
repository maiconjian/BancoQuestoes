import { Component, OnInit } from '@angular/core';
import { ApoioService } from '../util/apoio.service';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { Questao } from '../negocio/model/questao';
import { Alternativa } from '../negocio/model/alternativa';
import { CadastrarQuestaoService } from './cadastrar-questao.service';
import { Usuario } from '../negocio/model/usuario';
import { UnidadeCurricular } from '../negocio/model/unidade-curricular';

@Component({
  selector: 'app-cadastrar-questao',
  templateUrl: './cadastrar-questao.component.html',
  styleUrls: ['./cadastrar-questao.component.css']
})
export class CadastrarQuestaoComponent implements OnInit {

  questao: Questao;
  alternativaA: Alternativa;
  alternativaB: Alternativa;
  alternativaC: Alternativa;
  alternativaD: Alternativa;
  alternativaE: Alternativa;
  autor:Usuario;
  unidadeCurricular:UnidadeCurricular;

  previwEnunciadoFile: any;
  previwSuporteFile: any;
  tituloComponent:string;

  listaAlternativaBlock: any[];
  listaDificuldade:any[];
  listaCapacidade:any[];

  

  constructor(
    private apoioService: ApoioService,
    private mensagemComponent: MensagemComponent,
    private questaoService:CadastrarQuestaoService
  ) { }

  ngOnInit() {
    this.getIniciarInstancia();
    this.questao = new Questao;
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

  merge(){   
    this.questao.alternativaA=this.alternativaA;
    this.questao.alternativaB=this.alternativaB;
    this.questao.alternativaC=this.alternativaC;
    this.questao.alternativaD=this.alternativaD;
    this.questao.alternativaE=this.alternativaE;
    this.questao.publicado=true;
    this.autor.id = 1;
    this.questao.autor= this.autor;
    this.unidadeCurricular.id = 1;
    this.questao.unidadeCurricular=this.unidadeCurricular;
    console.log(this.questao);
      this.questaoService.incluir(this.previwEnunciadoFile,this.previwSuporteFile,JSON.stringify(this.questao))
      .then(response=>{
        console.log(response);
      })
      .catch(error =>console.log(error));
    
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
    this.autor = new Usuario();
    this.unidadeCurricular = new UnidadeCurricular();
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
