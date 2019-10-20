import { GenericModel } from './generic-model';
import { Perfil } from './perfil';
import { Curso } from './curso';
import { UnidadeCurricular } from './unidade-curricular';
import { Unidade } from './unidade';

export class Usuario extends GenericModel{

	nome:string;
	email:string;
	login:string;
	senha:string;
	pcodigoAcesso:string;
    solicitaSenha:boolean;
    perfis:Perfil[];
    cursos:Curso[];
    unidadesCurricular:UnidadeCurricular[];
    unidade:Unidade;
    

	

}