import { GenericModel } from './generic-model';
import { Alterntiva } from './alternativa';
import { UnidadeCurricular } from './unidade-curricular';
import { Usuario } from './usuario';

export class Questao extends GenericModel {

    capacidade: string;
    objetoConhecimento: string;
    dificuldade: string;
    enunciado: string;
    suporte: string;
    comando: string;
    alternativaA: Alterntiva;
    alternativaB: Alterntiva;
    alternativaC: Alterntiva;
    alternativaD: Alterntiva;
    alternativaE: Alterntiva;
    publicado: boolean;
    unidadeCurricular: UnidadeCurricular;
    autor: Usuario;
}