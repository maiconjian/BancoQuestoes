import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { CadastrarQuestaoComponent } from './cadastrar-questao/cadastrar-questao.component';


const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'usuario',component:UsuarioComponent},
  {path:'cadastrarQuetao',component:CadastrarQuestaoComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
