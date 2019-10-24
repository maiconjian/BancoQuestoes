import { GenericModel } from './generic-model';
import { Perfil } from './perfil';
import { Curso } from './curso';
import { UnidadeCurricular } from './unidade-curricular';
import { Unidade } from './unidade';

export class Usuario extends GenericModel{

    matricula:number;
	nome:string;
	email:string;
	login:string;
	senha:string;
	codigoAcesso:string;
    solicitaSenha:boolean;
    perfis:Perfil[];
    unidadesCurricular:UnidadeCurricular[];
    unidade:Unidade;
    

	

}