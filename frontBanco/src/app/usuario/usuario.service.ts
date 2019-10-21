import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UrlPadraoService } from '../util/url-padrao.service';

const headers = new HttpHeaders();
headers.append("Accept", 'application/json');
headers.append("Content-Type", 'application/json');



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient,
    private url: UrlPadraoService
  ) { }


  pesquisar(filtro: any): Promise<any> {
    let params = new HttpParams();

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }
    if (filtro.email) {
      params = params.append('email', filtro.email);
    }
    if (filtro.ativo) {
      params = params.append('ativo', filtro.ativo.toString());
    }

    return this.http.get(`${this.url.getURL()}/usuario/pesquisar`, { headers, params })
      .toPromise()
      .then(response => response)
      .catch(error => console.log(error))

  }


  listarPerfis():Promise<any>{
    return this.http.get(`${this.url.getURL()}/perfil/listar`,{headers})
    .toPromise()
    .then(response=>response);
  }

  listarCursos():Promise<any>{
    return this.http.get(`${this.url.getURL()}/curso/listar`,{headers})
    .toPromise()
    .then(response=>response);
  }

  listarUnidade():Promise<any>{
    return this.http.get(`${this.url.getURL()}/unidadeadm/listar`,{headers})
    .toPromise()
    .then(response=>response);
  }

  listarUnidadeCurricular():Promise<any>{
    return this.http.get(`${this.url.getURL()}/unidadecurricular/listar`,{headers})
    .toPromise()
    .then(response=>response);
  }
}
