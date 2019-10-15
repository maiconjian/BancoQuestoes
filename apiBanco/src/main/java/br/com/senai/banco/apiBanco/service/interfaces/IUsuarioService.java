package br.com.senai.banco.apiBanco.service.interfaces;

import java.io.Serializable;

import br.com.senai.banco.apiBanco.model.Usuario;
import br.com.senai.banco.apiBanco.repository.filter.UsuarioFilter;
import br.com.senai.banco.apiBanco.util.IGenericService;

public interface IUsuarioService extends IGenericService<Usuario, UsuarioFilter, Serializable> {

	
	public boolean alterarSenha(Usuario entity);
}
