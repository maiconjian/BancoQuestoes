package br.com.senai.banco.apiBanco.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.senai.banco.apiBanco.model.Perfil;
import br.com.senai.banco.apiBanco.repository.PerfilRepository;
import br.com.senai.banco.apiBanco.service.interfaces.IPerfilService;

@Service
public class PerfilService implements IPerfilService {

	@Autowired
	private PerfilRepository perfilRepo;
	
	@Override
	public Perfil incluir(Perfil entity) throws Exception {
		return this.perfilRepo.save(entity);
	}

	@Override
	public Perfil alterar(Perfil entity) {
		Optional<Perfil> perfil = this.perfilRepo.findById(entity.getId());
		
		if(perfil.isPresent()) {
			return this.perfilRepo.save(entity);
		}
		return perfil.get();
	}

	@Override
	public Perfil buscarPorId(long id) {
	
		return this.perfilRepo.findById(id).get();
	}

	@Override
	public List<Perfil> pesquisar(Perfil filtro) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Perfil> listarPerfis() {
		return this.perfilRepo.listarPerfis();
	}

}
