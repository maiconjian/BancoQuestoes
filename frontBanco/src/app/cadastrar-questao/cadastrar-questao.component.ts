import { Component, OnInit } from '@angular/core';
import { ApoioService } from '../util/apoio.service';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { Questao } from '../negocio/model/questao';

@Component({
  selector: 'app-cadastrar-questao',
  templateUrl: './cadastrar-questao.component.html',
  styleUrls: ['./cadastrar-questao.component.css']
})
export class CadastrarQuestaoComponent implements OnInit {

  questao: Questao;

  previwEnunciadoFile: any;
  previwSuporteFile:any;

  constructor(
    private apoioService: ApoioService,
    private mensagemComponent: MensagemComponent
  ) { }

  ngOnInit() {
    this.getIniciarInstancia();
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
  }

}
