package br.com.senai.banco.apiBanco.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.senai.banco.apiBanco.model.Alternativa;
import br.com.senai.banco.apiBanco.repository.AlternativaRepository;
import br.com.senai.banco.apiBanco.service.interfaces.IAlternativaService;

@Service
public class AlternativaService implements IAlternativaService {

	@Autowired
	private AlternativaRepository alternativaRepo;
	
	@Override
	public Alternativa incluir(Alternativa entity) throws Exception {
		return this.alternativaRepo.save(entity);
	}

	@Override
	public Alternativa alterar(Alternativa entity) {
		Optional<Alternativa> alternativa = this.alternativaRepo.findById(entity.getId());
		if(alternativa.isPresent()) {
			return this.alternativaRepo.save(entity);
		}
		
		return alternativa.get() ;
	}

	@Override
	public Alternativa buscarPorId(long id) {
		return this.alternativaRepo.findById(id).get();
	}

	@Override
	public List<Alternativa> pesquisar(Alternativa filtro) {
		// TODO Auto-generated method stub
		return null;
	}

}
