import { GenericModel } from './generic-model';
import { Curso } from './curso';

export class UnidadeCurricular extends GenericModel{
    nome:string;
    cargaHoraria:number;
    curso:Curso;
}