package br.com.senai.banco.apiBanco.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.senai.banco.apiBanco.model.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Long>{

}
