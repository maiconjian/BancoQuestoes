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
  usuario:any;
  unidadeCurricular:UnidadeCurricular;

  previwEnunciadoFile: any;
  previwSuporteFile: any;
  enunciadoImge:any;
  suporteImg:any;
  tituloComponent:string;

  listaAlternativaBlock: any[];
  listaDificuldade:any[];
  listaCapacidade:any[];
  listaUnidadesCurricular:any[];

  

  constructor(
    private apoioService: ApoioService,
    private mensagemComponent: MensagemComponent,
    private questaoService:CadastrarQuestaoService
  ) { }

  ngOnInit() {
   this.usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
   this.getIniciarInstancia();
   this.listaUnidadesCurricular=this.carregarComboUnidadeCurricular();
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
    this.autor.id = this.usuario.id;
    this.questao.autor= this.autor;
    this.questao.unidadeCurricular=this.unidadeCurricular;
      this.questaoService.incluir(this.enunciadoImge,this.suporteImg,JSON.stringify(this.questao))
      .then(response=>{
        this.mensagemComponent.showSuccess('Questão enviada para Analise!!')
        this.resetCadastro();
      })
      .catch(error =>console.log(error));
    
  }


  onSelectEnunciado(event) {
    this.previewEnunciado(event.target.files[0]);
    this.questao.enunciado='';
  }

  onSelectSuporte(event) {
    this.previewSuporte(event.target.files[0]);
    this.questao.suporte= '';
  }

  previewEnunciado(foto: any) {
    var mimeType = foto.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    this.enunciadoImge = foto;
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
    this.suporteImg=foto;
    var reader = new FileReader();
    reader.readAsDataURL(foto);
    reader.onload = (_event) => {
      this.previwSuporteFile = reader.result;
    }
  }


  getTextAreaEnunciado(inputFile: any) {
    this.previwEnunciadoFile = null;
    this.enunciadoImge = null;
    inputFile.value = "";
  }

  getTextAreaSuporte(inputFile: any) {
    this.previwSuporteFile = null;
    this.suporteImg=null;
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
    if (alternativa.checked == true) {
      for (let i = 0; i < this.listaAlternativaBlock.length; i++) {
        if (alternativa.name.substring(0,12) != this.listaAlternativaBlock[i].label) {
          this.listaAlternativaBlock[i].value = true;
        }
      }
    } else if (alternativa.checked == false) {
      for (let i = 0; i < this.listaAlternativaBlock.length; i++) {
        if (alternativa.name != this.listaAlternativaBlock[i].label) {
          this.listaAlternativaBlock[i].value = false;
        }
      }
    }
  }

  getTooltipAlternativa(alternativa:any){
   
    if(alternativa.checked ==true){
      return 'Correta!';
    }else{
      return 'Incorreta!';
    }
  }

  carregarComboUnidadeCurricular(){
    let lista:any[]=[];
    for (let i = 0; i < this.usuario.unidadesCurricular.length; i++) {
      lista.push(
        {label:this.usuario.unidadesCurricular[i].nome,value:this.usuario.unidadesCurricular[i].id}
      );
    }
    return lista;
  }


  resetCadastro(){
    this.getIniciarInstancia();
    this.previewEnunciado = null;
    this.previewSuporte=null;
    this.previwEnunciadoFile=null;
    this.previwSuporteFile=null;

  }

}
