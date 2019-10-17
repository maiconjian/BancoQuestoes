import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlPadraoService } from '../util/url-padrao.service';

const headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append("Content-Type", 'application/json');

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  constructor(
    private http:HttpClient,
    private urlPadrao:UrlPadraoService
  ) { }

  autenticar(obj:any):Promise<any>{
    
    return this.http.post(`${this.urlPadrao.getURL()}/usuario/autenticar`,obj,{headers: headers, responseType: 'arraybuffer'})
    .toPromise()
    .then(response=>response)
    .catch(error =>console.log(error));
  }

 
}
