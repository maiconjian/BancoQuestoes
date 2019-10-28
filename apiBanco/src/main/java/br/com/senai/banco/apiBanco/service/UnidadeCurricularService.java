package br.com.senai.banco.apiBanco.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.senai.banco.apiBanco.model.UnidadeCurricular;
import br.com.senai.banco.apiBanco.model.UnidadeCurricular_;
import br.com.senai.banco.apiBanco.repository.UnidadeCurricularRepository;
import br.com.senai.banco.apiBanco.service.interfaces.IUnidadeCurricularService;

@Service
public class UnidadeCurricularService implements IUnidadeCurricularService{

	@Autowired
	private UnidadeCurricularRepository unidadeCurricularRepo;
	
	@Override
	public UnidadeCurricular_ incluir(UnidadeCurricular_ entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UnidadeCurricular_ alterar(UnidadeCurricular_ entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UnidadeCurricular_ buscarPorId(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<UnidadeCurricular_> pesquisar(UnidadeCurricular filtro) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<UnidadeCurricular> listarUnidadeCurricular() {
		return this.unidadeCurricularRepo.listarUnidadeCurricular();
	}

}
