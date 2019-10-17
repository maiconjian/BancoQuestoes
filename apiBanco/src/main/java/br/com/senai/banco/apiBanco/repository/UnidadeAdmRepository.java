package br.com.senai.banco.apiBanco.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.senai.banco.apiBanco.model.UnidadeAdm;

public interface UnidadeAdmRepository extends CrudRepository<UnidadeAdm, Long> {

	
	@Query("SELECT unidade FROM UnidadeAdm unidade WHERE unidade.ativo = 1")
	List<UnidadeAdm> listarUnidades();
}
