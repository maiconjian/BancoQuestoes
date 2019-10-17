package br.com.senai.banco.apiBanco.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.senai.banco.apiBanco.model.Curso;
import br.com.senai.banco.apiBanco.repository.CursoRepository;
import br.com.senai.banco.apiBanco.service.interfaces.ICursoService;

@Service
public class CursoService implements ICursoService {

	@Autowired
	private CursoRepository cursoRepo;
	
	
	@Override
	public Curso incluir(Curso entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Curso alterar(Curso entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Curso buscarPorId(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Curso> pesquisar(Curso filtro) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Curso> listarCursos() {
		return this.cursoRepo.listarCursos();
	}

}
