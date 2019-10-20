import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApoioService {

  constructor(
  ) { }



  comboSituacao() {
    let lista: any[] = []

    lista.push(
      { label: 'Ativo', value: true }
    )
    lista.push(
      { label: 'Inativo', value: false }
    )

    return lista;

  }
}
