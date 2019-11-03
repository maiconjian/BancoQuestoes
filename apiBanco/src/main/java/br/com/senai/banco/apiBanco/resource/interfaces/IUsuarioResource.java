package br.com.senai.banco.apiBanco.resource.interfaces;

import java.io.Serializable;

import org.springframework.http.ResponseEntity;

import br.com.senai.banco.apiBanco.dto.LoginDto;
import br.com.senai.banco.apiBanco.model.Usuario;
import br.com.senai.banco.apiBanco.repository.filter.UsuarioFilter;
import br.com.senai.banco.apiBanco.util.IGenericResource;

public interface IUsuarioResource  extends IGenericResource<Usuario, UsuarioFilter, Serializable>{

	
	
	public void alterarSenha(Usuario entity);
	
	
	public byte[] autenticar(LoginDto login) throws Exception;
	
	public ResponseEntity<?> verificaCodigo(String login,String codigo);
	
	
}
