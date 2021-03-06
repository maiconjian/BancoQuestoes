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
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {TooltipModule} from 'primeng/tooltip';
import {MultiSelectModule} from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FileUploadModule} from 'primeng/fileupload';
import {InputSwitchModule} from 'primeng/inputswitch';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageService } from 'primeng/components/common/messageservice';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


import { UsuarioComponent } from './usuario/usuario.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { UnidadeComponent } from './unidade/unidade.component';
import { CursoComponent } from './curso/curso.component';
import { UnidadeCurricularComponent } from './unidade-curricular/unidade-curricular.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { CadastrarQuestaoComponent } from "./cadastrar-questao/cadastrar-questao.component";
import { HasPermissionDirective } from './util/HasPermissionDirective';
import { PesquisarQuestaoComponent } from './pesquisar-questao/pesquisar-questao.component';
import { VisualizarQuestaoComponent } from './visualizar-questao/visualizar-questao.component';
import { AvaliarComponent } from './avaliar/avaliar.component';
import { MinhasQuestoesComponent } from './minhas-questoes/minhas-questoes.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    MenuComponent,
    HomeComponent,
    UnidadeComponent,
    CursoComponent,
    UnidadeCurricularComponent,
    MensagemComponent,
    HasPermissionDirective,
    CadastrarQuestaoComponent,
    PesquisarQuestaoComponent,
    VisualizarQuestaoComponent,
    AvaliarComponent,
    MinhasQuestoesComponent,
    SpinnerComponent
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
    MenubarModule,
    TableModule,
    DropdownModule,
    TooltipModule,
    MultiSelectModule,
    ToastModule,
    InputTextareaModule,
    FileUploadModule,
    InputSwitchModule,
    KeyFilterModule,
    ProgressSpinnerModule
   
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },// incluir serquilha para manter a referencia da pagina 
    UrlPadraoService,
    MessageService,
    MensagemComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
