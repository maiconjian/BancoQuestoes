package br.com.senai.banco.apiBanco.service.interfaces;

import java.io.Serializable;
import java.util.List;

import br.com.senai.banco.apiBanco.model.UnidadeAdm;
import br.com.senai.banco.apiBanco.util.IGenericService;

public interface IUnidadeAdmService extends IGenericService<UnidadeAdm, UnidadeAdm, Serializable>{

	
	List<UnidadeAdm> listarUnidades();
}
