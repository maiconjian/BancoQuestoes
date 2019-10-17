package br.com.senai.banco.apiBanco.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.senai.banco.apiBanco.model.UnidadeAdm;
import br.com.senai.banco.apiBanco.repository.UnidadeAdmRepository;
import br.com.senai.banco.apiBanco.service.interfaces.IUnidadeAdmService;

@Service
public class UnidadeAdmService implements IUnidadeAdmService {

	
	@Autowired
	private UnidadeAdmRepository unidadeRepo;
	
	
	@Override
	public UnidadeAdm incluir(UnidadeAdm entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UnidadeAdm alterar(UnidadeAdm entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UnidadeAdm buscarPorId(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<UnidadeAdm> pesquisar(UnidadeAdm filtro) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<UnidadeAdm> listarUnidades() {
		// TODO Auto-generated method stub
		return this.unidadeRepo.listarUnidades();
	}

}
