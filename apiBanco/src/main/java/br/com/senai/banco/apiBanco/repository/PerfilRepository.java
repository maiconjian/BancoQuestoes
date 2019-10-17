package br.com.senai.banco.apiBanco.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.senai.banco.apiBanco.model.Perfil;

public interface PerfilRepository extends CrudRepository<Perfil, Long> {

	
	@Query("SELECT perfil FROM Perfil perfil WHERE perfil.ativo = 1")
	List<Perfil> listarPerfis();
}
