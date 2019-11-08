import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlPadraoService } from './url-padrao.service';
import { UsuarioService } from '../usuario/usuario.service';
import { CursoService } from '../curso/curso.service';
import { UnidadeService } from '../unidade/unidade.service';
import { UnidadeCurricularService } from '../unidade-curricular/unidade-curricular.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApoioService {

  constructor(
    private router:Router,
    private usuarioService:UsuarioService,
    private cursoService:CursoService,
    private unidadeService:UnidadeService,
    private unidadeCurricularService:UnidadeCurricularService,

  ) { }



  comboSituacao() {
    let lista: any[] = []

    lista.push(
      { label: 'Ativo', value: true }
    )
    lista.push(
      { label: 'Inativo', value: false }
    )

    return lista;

  }

  carregarComboPerfil(){
    let lista:any[]=[];
    this.usuarioService.listarPerfis()
    .then(response => {
      for (let i = 0; i < response.length; i++) {
        lista.push({
          label:response[i].nome,
          value:response[i]
        })
        
      }
    
    })
    return lista;
  }

  carregarUnidade(){
    let lista:any[]=[];
    this.unidadeService.listar()
    .then(response => {
      for (let i = 0; i < response.length; i++) {
        lista.push({
          label:response[i].nome,
          value:response[i].id
        })
        
      }
    
    })
    return lista;
  }

  carregarComboCursos(){
    let lista:any[]=[];
    this.cursoService.listar()
    .then(response => {
      for (let i = 0; i < response.length; i++) {
        lista.push({
          label:response[i].nome,
          value:response[i].id
        })
        
      }
    
    })
    return lista;
  }
  carregarComboUnidadedesCurricular(){
    let lista:any[]=[];
    this.unidadeCurricularService.listar()
    .then(response => {
      console.log(response);
      for (let i = 0; i < response.length; i++) {
        lista.push({
          label:response[i].nome,
          value:response[i]
        })
        
      }
    
    })
    return lista;
  }

  carregarComboDificuldade(){
    let lista:any[]=[];
    lista.push(
      {label:'Muito Fácil',value:'Muito Facil'},
      {label:'Fácil',value:'Facil'},
      {label:'Médio',value:'Medio'},
      {label:'Difícil',value:'Dificil'},
      {label:'Muito Difícil',value:'Muito Dificil'},
    )
    return lista;
  }

  carregarComboCapacidade(){
    let lista:any[]=[];
    lista.push(
      {label:'C1',value:'C1'},
      {label:'C2',value:'C2'},
      {label:'C3',value:'C3'},
      {label:'C4',value:'C4'},
      {label:'C5',value:'C5'},
      {label:'C6',value:'C6'},
      {label:'C7',value:'C7'},
      {label:'C8',value:'C8'},
      {label:'C9',value:'C9'},
      {label:'C10',value:'C10'},
    );
    return lista;
  }


  carregarComboUnidadeCurricular(){
    let usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    let lista:any[]=[];
    for (let i = 0; i < usuario.unidadesCurricular.length; i++) {
      lista.push(
        {label:usuario.unidadesCurricular[i].nome,value:usuario.unidadesCurricular[i].id}
      );
    }
    return lista;
  }


  bloquearAcessoNaoAutorizado(){
    if(localStorage.getItem('usuarioLogado') == null){
      this.router.navigateByUrl('/login')
    }
  }

}
