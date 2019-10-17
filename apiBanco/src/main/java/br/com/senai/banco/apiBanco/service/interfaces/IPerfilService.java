package br.com.senai.banco.apiBanco.service.interfaces;

import java.io.Serializable;
import java.util.List;

import br.com.senai.banco.apiBanco.model.Perfil;
import br.com.senai.banco.apiBanco.util.IGenericService;

public interface IPerfilService extends IGenericService<Perfil, Perfil, Serializable> {

	List<Perfil> listarPerfis();
}
