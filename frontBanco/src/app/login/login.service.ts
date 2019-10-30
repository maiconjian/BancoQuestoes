import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlPadraoService } from '../util/url-padrao.service';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append("Content-Type", 'application/json');

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  private currentUserSubject = new BehaviorSubject<any>({});
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

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

  verificarCodigo(login:any,codigo:any):Promise<any>{
    return this.http.get(`${this.urlPadrao.getURL()}/usuario//verificarcodigo/${login}/${codigo}`,{headers})
    .toPromise()
    .then(response=>response)
    .catch(error =>console.log(error));
  }

  setUser(user) {
    console.log('new user', user);
    this.currentUserSubject.next(user);
  }
}
