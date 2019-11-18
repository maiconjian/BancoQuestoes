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
        this.nomeUsuario = this.usuario.login;
    }
}



