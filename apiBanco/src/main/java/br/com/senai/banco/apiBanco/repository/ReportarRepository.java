package br.com.senai.banco.apiBanco.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.senai.banco.apiBanco.model.Reportar;

public interface ReportarRepository extends CrudRepository<Reportar, Long>{

	
	
//	List<Reportar> listarReportadas(long idUsuario);
}
