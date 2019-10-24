import { Injectable } from '@angular/core';
import { UrlPadraoService } from '../util/url-padrao.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders();
headers.append("Accept", 'application/json');
headers.append("Content-Type", 'application/json');


@Injectable({
  providedIn: 'root'
})
export class UnidadeCurricularService {

  constructor(
    private url:UrlPadraoService,
    private http:HttpClient
  ) { }

  listar(id:any):Promise<any>{
    return this.http.get(`${this.url.getURL()}/unidadecurricular/listar/${id}`,{headers})
    .toPromise()
    .then(response=>response);
  }
}
