package br.com.senai.banco.apiBanco.resource.interfaces;

import java.io.Serializable;

import br.com.senai.banco.apiBanco.model.Usuario;
import br.com.senai.banco.apiBanco.repository.filter.UsuarioFilter;
import br.com.senai.banco.apiBanco.util.IGenericResource;

public interface IUsuarioResource  extends IGenericResource<Usuario, UsuarioFilter, Serializable>{

	
	
	public boolean alterarSenha(Usuario entity);
}
