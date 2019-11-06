import { GenericModel } from './generic-model';
import { Alternativa } from './alternativa';
import { UnidadeCurricular } from './unidade-curricular';
import { Usuario } from './usuario';

export class Questao extends GenericModel {

    capacidade: string;
    objetoConhecimento: string;
    dificuldade: string;
    enunciado: string;
    suporte: string;
    comando: string;
    alternativaA: Alternativa;
    alternativaB: Alternativa;
    alternativaC: Alternativa;
    alternativaD: Alternativa;
    alternativaE: Alternativa;
    publicado: boolean;
    unidadeCurricular: UnidadeCurricular;
    autor: Usuario;
}