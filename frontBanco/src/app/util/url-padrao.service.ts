import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlPadraoService {

  // url  = 'http://localhost:8080';
  url  = 'http://ec2-3-91-153-3.compute-1.amazonaws.com:8080/apiBanco';

  constructor() { }

  getURL(){
    return this.url;
  }
  
}
