import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlPadraoService {

  // url  = 'http://localhost:8080';
  url  = 'http://ec2-18-212-97-228.compute-1.amazonaws.com:8080/apiBanco';

  constructor() { }

  getURL(){
    return this.url;
  }
  
}
