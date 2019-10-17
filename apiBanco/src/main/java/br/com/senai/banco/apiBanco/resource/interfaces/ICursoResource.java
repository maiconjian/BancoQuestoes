package br.com.senai.banco.apiBanco.resource.interfaces;

import java.io.Serializable;

import org.springframework.http.ResponseEntity;

import br.com.senai.banco.apiBanco.model.Curso;
import br.com.senai.banco.apiBanco.util.IGenericResource;

public interface ICursoResource extends IGenericResource<Curso, Curso, Serializable> {

	public ResponseEntity<?> listar();
}
