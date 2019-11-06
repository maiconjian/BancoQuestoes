import { Injectable } from '@angular/core';
import { UrlPadraoService } from '../util/url-padrao.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
