package br.com.senai.banco.apiBanco.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.senai.banco.apiBanco.model.UnidadeCurricular;

public interface UnidadeCurricularRepository extends CrudRepository<UnidadeCurricular, Long> {

	
	@Query("SELECT unidadeCurricular FROM UnidadeCurricular unidadeCurricular "
			+ "WHERE  unidadeCurricular.ativo = 1")
	List<UnidadeCurricular> listarUnidadeCurricular();
}
