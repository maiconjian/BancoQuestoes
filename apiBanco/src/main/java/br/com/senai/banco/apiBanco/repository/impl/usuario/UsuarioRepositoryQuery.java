package br.com.senai.banco.apiBanco.repository.impl.usuario;

import java.util.List;

import br.com.senai.banco.apiBanco.model.Usuario;
import br.com.senai.banco.apiBanco.repository.filter.UsuarioFilter;

public interface UsuarioRepositoryQuery {
	
	List<Usuario> pesquisar(UsuarioFilter usuarioFiltro);

}
