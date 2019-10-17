import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlPadraoService {

  url  = 'http://localhost:8080';
  // url  = 'http://localhost:8080';

  constructor() { }

  getURL(){
    return this.url;
  }
  
}
