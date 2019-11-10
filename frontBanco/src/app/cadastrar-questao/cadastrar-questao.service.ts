import { Injectable } from '@angular/core';
import { UrlPadraoService } from '../util/url-padrao.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders();
headers.append("Accept", 'application/json');
headers.append("Content-Type", 'application/json');


@Injectable({
  providedIn: 'root'
})
export class CadastrarQuestaoService {

  constructor(
    private http: HttpClient,
    private url: UrlPadraoService
  ) { }


  pesquisar(filtro: any): Promise<any> {
    let params = new HttpParams();

    if (filtro.curso) {
      params = params.append('curso', filtro.curso);
    }
    if (filtro.unidadeCurricular) {
      params = params.append('unidadeCurricular', filtro.unidadeCurricular);
    }
    if (filtro.nivelDificuldade) {
      params = params.append('nivelDificuldade', filtro.nivelDificuldade);
    }

    params = params.append('publicada','1');

    return this.http.get(`${this.url.getURL()}/questao/pesquisar`, { headers, params })
      .toPromise()
      .then(response => response)
      .catch(error => console.log(error))

  }

  incluir(enunciadoImg:any,suporteImg:any,questao:any):Promise<any>{
    const formData = new FormData();
    formData.append('enunciadoImg',enunciadoImg);
    formData.append('suporteImg',suporteImg);
    formData.append('entity',questao);

    return this.http.post(`${this.url.getURL()}/questao/incluir`,formData,{headers})
    .toPromise()
    .then(response=>response)
    .catch(erro=>console.log(erro));
  }
}
