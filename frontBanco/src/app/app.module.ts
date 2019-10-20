import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UrlPadraoService } from './util/url-padrao.service';
import { HttpClientModule } from '@angular/common/http';


import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {PasswordModule} from 'primeng/password';
import {MegaMenuModule} from 'primeng/megamenu';
import {TableModule} from 'primeng/table';

import { UsuarioComponent } from './usuario/usuario.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    PasswordModule,
    MegaMenuModule,
    TableModule
  ],
  providers: [
    UrlPadraoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
