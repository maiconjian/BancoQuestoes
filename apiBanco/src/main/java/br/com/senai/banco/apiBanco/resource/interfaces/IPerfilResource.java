package br.com.senai.banco.apiBanco.resource.interfaces;

import java.io.Serializable;

import org.springframework.http.ResponseEntity;

import br.com.senai.banco.apiBanco.model.Perfil;
import br.com.senai.banco.apiBanco.util.IGenericResource;

public interface IPerfilResource extends IGenericResource<Perfil, Perfil, Serializable>{

	
	public ResponseEntity<?> listar();
}
