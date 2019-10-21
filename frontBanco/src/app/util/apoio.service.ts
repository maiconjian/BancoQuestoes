import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlPadraoService } from './url-padrao.service';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ApoioService {

  constructor(
    private usuarioService:UsuarioService
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
    this.usuarioService.listarUnidade()
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

  carregarComboCursos(){
    let lista:any[]=[];
    this.usuarioService.listarCursos()
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
  carregarComboUnidadedesCurricular(){
    let lista:any[]=[];
    this.usuarioService.listarUnidadeCurricular()
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
