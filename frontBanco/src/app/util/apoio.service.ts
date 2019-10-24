import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlPadraoService } from './url-padrao.service';
import { UsuarioService } from '../usuario/usuario.service';
import { CursoService } from '../curso/curso.service';
import { UnidadeService } from '../unidade/unidade.service';
import { UnidadeCurricularService } from '../unidade-curricular/unidade-curricular.service';

@Injectable({
  providedIn: 'root'
})
export class ApoioService {

  constructor(
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
  carregarComboUnidadedesCurricular(id:any){
    let lista:any[]=[];
    this.unidadeCurricularService.listar(id)
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
}
