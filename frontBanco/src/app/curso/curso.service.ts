import { Injectable } from '@angular/core';
import { UrlPadraoService } from '../util/url-padrao.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const headers = new HttpHeaders();
headers.append("Accept", 'application/json');
headers.append("Content-Type", 'application/json');


@Injectable({
  providedIn: 'root'
})
export class CursoService {
  constructor(
    private url:UrlPadraoService,
    private http:HttpClient
  ) { }

  listar():Promise<any>{
    return this.http.get(`${this.url.getURL()}/listar`,{headers})
    .toPromise()
    .then(response=>response);
  }
}
