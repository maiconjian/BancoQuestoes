package br.com.senai.banco.apiBanco.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.senai.banco.apiBanco.model.Curso;

public interface CursoRepository extends CrudRepository<Curso, Long> {

	
	@Query("SELECT curso FROM Curso curso WHERE curso.ativo = 1")
	List<Curso> listarCursos();
}
