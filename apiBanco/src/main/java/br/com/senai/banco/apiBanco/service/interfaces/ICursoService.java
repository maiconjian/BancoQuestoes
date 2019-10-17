package br.com.senai.banco.apiBanco.service.interfaces;

import java.io.Serializable;
import java.util.List;

import br.com.senai.banco.apiBanco.model.Curso;
import br.com.senai.banco.apiBanco.util.IGenericService;

public interface ICursoService extends IGenericService<Curso, Curso, Serializable> {

	
	List<Curso> listarCursos();
}
