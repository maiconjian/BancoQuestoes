package br.com.senai.banco.apiBanco.service.interfaces;

import java.io.Serializable;

import br.com.senai.banco.apiBanco.dto.LoginDto;
import br.com.senai.banco.apiBanco.model.Usuario;
import br.com.senai.banco.apiBanco.repository.filter.UsuarioFilter;
import br.com.senai.banco.apiBanco.util.IGenericService;

public interface IUsuarioService extends IGenericService<Usuario, UsuarioFilter, Serializable> {

	
	public void alterarSenha(Usuario entity);
	
	
	public void gerarEnviarSenhaAleatoria(Usuario usuario) throws Exception;
	
	
	public Usuario autenticarUsuario(LoginDto login) throws Exception;
	
}
