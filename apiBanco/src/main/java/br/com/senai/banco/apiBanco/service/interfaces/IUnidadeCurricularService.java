package br.com.senai.banco.apiBanco.service.interfaces;

import java.io.Serializable;
import java.util.List;

import br.com.senai.banco.apiBanco.model.UnidadeCurricular;
import br.com.senai.banco.apiBanco.model.UnidadeCurricular_;
import br.com.senai.banco.apiBanco.util.IGenericService;

public interface IUnidadeCurricularService extends IGenericService<UnidadeCurricular_, UnidadeCurricular, Serializable>{

	List<UnidadeCurricular> listarUnidadeCurricular(long idCurso);
}
