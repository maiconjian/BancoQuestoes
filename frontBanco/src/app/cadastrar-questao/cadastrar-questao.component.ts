import { Component, OnInit } from '@angular/core';
import { ApoioService } from '../util/apoio.service';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { Questao } from '../negocio/model/questao';
import { Alternativa } from '../negocio/model/alternativa';
import { CadastrarQuestaoService } from './cadastrar-questao.service';
import { Usuario } from '../negocio/model/usuario';
import { UnidadeCurricular } from '../negocio/model/unidade-curricular';
import { ActivatedRoute, Router } from '@angular/router';

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
  autor: Usuario;
  usuario: any;
  unidadeCurricular: UnidadeCurricular;

  previwEnunciadoFile: any;
  previwSuporteFile: any;
  enunciadoImge: any;
  suporteImg: any;
  tituloComponent: string;
  tituloBotaoCad:string;

  listaAlternativaBlock: any[];
  listaDificuldade: any[];
  listaCapacidade: any[];
  listaUnidadesCurricular: any[];
  idQuestao: number;
  isEditar:boolean;
  displaySpinner:boolean;

  constructor(
    private apoioService: ApoioService,
    private mensagemComponent: MensagemComponent,
    private questaoService: CadastrarQuestaoService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.isEditar=false;
    this.listaAlternativaBlock = [
      { label: "alternativaA", value: false },
      { label: "alternativaB", value: false },
      { label: "alternativaC", value: false },
      { label: "alternativaD", value: false },
      { label: "alternativaE", value: false }
    ]
    this.tituloBotaoCad = 'Cadastrar';
    this.tituloComponent='Cadastro Questão';
    this.idQuestao = this.route.snapshot.params.id;
    this.editar();
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    this.apoioService.adicionarPermissoes(this.usuario);
    this.getIniciarInstancia();
    this.listaUnidadesCurricular = this.apoioService.carregarComboUnidadeCurricularUsuario();
    this.questao = new Questao;
    this.listaDificuldade = this.apoioService.carregarComboDificuldade();
    this.listaCapacidade = this.apoioService.carregarComboCapacidade();
    this.displaySpinner = false;

  }

  editar(){
    if (this.idQuestao) {
      this.getEditar(this.idQuestao);
      this.tituloBotaoCad = 'Confirmar';
      this.tituloComponent='Editar Questão';
      this.isEditar=true;
    }
  }


  merge() {
    this.displaySpinner = true;
    if (!this.idQuestao) {
      this.questao.alternativaA = this.alternativaA;
      this.questao.alternativaB = this.alternativaB;
      this.questao.alternativaC = this.alternativaC;
      this.questao.alternativaD = this.alternativaD;
      this.questao.alternativaE = this.alternativaE;
      this.questao.publicado = false;
      this.autor.id = this.usuario.id;
      this.questao.autor = this.autor;
      this.questao.unidadeCurricular = this.unidadeCurricular;
      if (!this.getBlockCadastrar()) {
        this.questaoService.incluir(this.enunciadoImge, this.suporteImg, JSON.stringify(this.questao))
          .then(response => {
            this.mensagemComponent.showSuccess('Questão enviada para Analise!!')
            this.resetCadastro();
          })
          .catch(error => {
            this.displaySpinner = false;
            console.log(error)
          });
      } else {
        this.displaySpinner = false;
        this.mensagemComponent.showWarn('Todos os campos são obrigatorios!');
      }
    }else{
      this.questao.rejeitado=false;
      this.questaoService.alterar(this.enunciadoImge, this.suporteImg, JSON.stringify(this.questao))
      .then(response=>{
        this.mensagemComponent.showSuccess('Alterada com Sucesso!');
        setTimeout(() => {
          this.displaySpinner = false;
          this.router.navigateByUrl('/minhasQuestoes')
        }, 200);
      })
    }

  }

  getEditar(idQuestao) {
    this.getIniciarInstancia();
    this.questaoService.buscarPorId(idQuestao)
      .then(response => {
        this.questao = response;
        this.alternativaA = response.alternativaA;
        this.alternativaB = response.alternativaB;
        this.alternativaC = response.alternativaC;
        this.alternativaD = response.alternativaD;
        this.alternativaE = response.alternativaE;
        this.autor = response.autor;
        this.unidadeCurricular = response.unidadeCurricular;
        this.questao.unidadeCurricular=this.unidadeCurricular;
        this.questao.alternativaA = this.alternativaA;
        this.questao.alternativaB = this.alternativaB;
        this.questao.alternativaC = this.alternativaC;
        this.questao.alternativaD = this.alternativaD;
        this.questao.alternativaE = this.alternativaE;
        this.questao.autor=this.autor;
        this.getImgEnunciado(this.questao.enunciado);
        this.getImgSuporte(this.questao.suporte);
        this.listaAlternativaBlock = [
          { label: "alternativaA", value: !this.alternativaA.correta },
          { label: "alternativaB", value: !this.alternativaB.correta },
          { label: "alternativaC", value: !this.alternativaC.correta },
          { label: "alternativaD", value: !this.alternativaD.correta },
          { label: "alternativaE", value: !this.alternativaE.correta }
        ]

      });
  }

  onSelectEnunciado(event, inputFile: any) {
    this.previewEnunciado(event.target.files[0]);
  }

  onSelectSuporte(event, inputFile: any) {
    this.previewSuporte(event.target.files[0]);
  }

  previewEnunciado(foto: any) {
    var mimeType = foto.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    this.enunciadoImge = foto;
    this.questao.enunciado = this.enunciadoImge.name;
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
    this.suporteImg = foto;
    this.questao.suporte = this.suporteImg.name;
    var reader = new FileReader();
    reader.readAsDataURL(foto);
    reader.onload = (_event) => {
      this.previwSuporteFile = reader.result;
    }
  }


  getTextAreaEnunciado(inputFile: any) {
    this.previwEnunciadoFile = null;
    this.enunciadoImge = null;
    this.questao.enunciado = '';
    inputFile.value = "";
  }

  getTextAreaSuporte(inputFile: any) {
    this.previwSuporteFile = null;
    this.suporteImg = null;
    this.questao.suporte = '';
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
    this.alternativaA.correta = false;
    this.alternativaB = new Alternativa();
    this.alternativaB.correta = false;
    this.alternativaC = new Alternativa();
    this.alternativaC.correta = false;
    this.alternativaD = new Alternativa();
    this.alternativaD.correta = false;
    this.alternativaE = new Alternativa();
    this.alternativaE.correta = false;
    this.listaAlternativaBlock = [
      { label: "alternativaA", value: false },
      { label: "alternativaB", value: false },
      { label: "alternativaC", value: false },
      { label: "alternativaD", value: false },
      { label: "alternativaE", value: false }
    ]
  }





  configBotaoAlternativa(alternativa: any) {
    if (alternativa.checked == true) {
      for (let i = 0; i < this.listaAlternativaBlock.length; i++) {
        if (alternativa.name.substring(0, 12) != this.listaAlternativaBlock[i].label) {
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

  getTooltipAlternativa(alternativa: any) {

    if (alternativa.checked == true) {
      return 'Correta!';
    } else {
      return 'Incorreta!';
    }
  }




  resetCadastro() {
    // this.getIniciarInstancia();
    // this.enunciadoImge=null;
    // this.suporteImg=null;
    // this.previewEnunciado = null;
    // this.previewSuporte=null;
    // this.previwEnunciadoFile=null;
    // this.previwSuporteFile=null;
    // this.getFotoEnunciado();
    // this.getFotoSuporte();
    //this.ngOnInit();
    setTimeout(() => {
      this.displaySpinner = false;
      window.location.reload();
    }, 200);
  }

  getBlockCadastrar() {
    if (this.questao.capacidade == '' || this.questao.capacidade == null || this.questao.objetoConhecimento == '' ||
      this.questao.objetoConhecimento == null || this.questao.dificuldade == '' || this.questao.dificuldade == null ||
      this.questao.enunciado == '' || this.questao.enunciado == null || this.questao.suporte == '' || this.questao.suporte == null ||
      this.questao.comando == '' || this.questao.comando == null ||
      this.alternativaA.descricao == null || this.alternativaA.descricao == '' ||
      this.alternativaB.descricao == null || this.alternativaB.descricao == '' ||
      this.alternativaC.descricao == null || this.alternativaC.descricao == '' ||
      this.alternativaD.descricao == null || this.alternativaD.descricao == '' ||
      this.alternativaE.descricao == null || this.alternativaE.descricao == '' ||
      this.questao.alternativaA.correta == false && this.questao.alternativaB.correta == false &&
      this.questao.alternativaC.correta == false && this.questao.alternativaD.correta == false &&
      this.questao.alternativaE.correta == false ||
      this.unidadeCurricular == null) {
      return true;
    } else {
      return false;
    }
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
          this.previwEnunciadoFile = 'data:image/jpg;base64,' + base64String;
          // this.previaImgEnunciado = false;
        } else {
          // this.previaImgEnunciado = true;
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
          this.previwSuporteFile = 'data:image/jpg;base64,' + base64String;
          // this.previaImgSuporte = false;
        } else {
          // this.previaImgSuporte = true;
        }
      })
  }
}
