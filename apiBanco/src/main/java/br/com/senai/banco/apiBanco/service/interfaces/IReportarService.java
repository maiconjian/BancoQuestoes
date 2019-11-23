package br.com.senai.banco.apiBanco.service.interfaces;

import java.io.Serializable;
import java.util.List;

import br.com.senai.banco.apiBanco.model.Reportar;
import br.com.senai.banco.apiBanco.util.IGenericService;

public interface IReportarService extends IGenericService<Reportar, Reportar, Serializable> {

	
	List<Reportar> listarReportadas(long idUsuario);
}
