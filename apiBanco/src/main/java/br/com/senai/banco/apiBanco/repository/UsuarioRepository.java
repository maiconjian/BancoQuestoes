package br.com.senai.banco.apiBanco.repository;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.senai.banco.apiBanco.model.Usuario;
import br.com.senai.banco.apiBanco.repository.impl.UsuarioRepositoryQuery;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> ,UsuarioRepositoryQuery{

	
	Optional<Usuario> findByLogin(String login);
	
//	@Modifying
//	@Transactional
//	@Query(value="UPDATE USUARIO SET SENHA = ?1 WHERE ID = ?2")
//	public boolean alterarSenha(String senha,long id);
}
