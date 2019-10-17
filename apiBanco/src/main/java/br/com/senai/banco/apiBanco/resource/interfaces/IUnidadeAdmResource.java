package br.com.senai.banco.apiBanco.resource.interfaces;

import java.io.Serializable;

import org.springframework.http.ResponseEntity;

import br.com.senai.banco.apiBanco.model.UnidadeAdm;
import br.com.senai.banco.apiBanco.util.IGenericResource;

public interface IUnidadeAdmResource extends IGenericResource<UnidadeAdm, UnidadeAdm, Serializable>{

	public ResponseEntity<?> listar();
}
