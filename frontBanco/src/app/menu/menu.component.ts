import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Usuario } from '../negocio/model/usuario';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    usuario:Usuario;
    nomeUsuario:string;
  
    constructor() { }

    ngOnInit() {
        this.usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
        this.getNomeUsuario();
    }


    getNomeUsuario(){
        let nome:any[] =[];
        for (let i = 0; i < this.usuario.nome.length; i++) {
                if(this.usuario.nome[i] == ' ' || i >8){
                    this.nomeUsuario = this.usuario.nome.substring(0,i);
                    i= this.usuario.nome.length;
                    console.log(this.nomeUsuario);
                }   
        }
    }

}



