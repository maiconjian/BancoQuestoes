package br.com.senai.banco.apiBanco.resource.interfaces;

import java.io.Serializable;

import org.springframework.http.ResponseEntity;

import br.com.senai.banco.apiBanco.model.UnidadeCurricular;
import br.com.senai.banco.apiBanco.util.IGenericResource;

public interface IUnidadeCurricularResouce extends IGenericResource<UnidadeCurricular, UnidadeCurricular, Serializable>{

	public ResponseEntity<?> listar();
}
