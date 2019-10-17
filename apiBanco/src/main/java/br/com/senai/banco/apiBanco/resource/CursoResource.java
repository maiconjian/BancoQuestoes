package br.com.senai.banco.apiBanco.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.senai.banco.apiBanco.model.Curso;
import br.com.senai.banco.apiBanco.resource.interfaces.ICursoResource;
import br.com.senai.banco.apiBanco.service.CursoService;

@RestController
@RequestMapping("/curso")
public class CursoResource implements ICursoResource{

	@Autowired
	private CursoService cursoService;
	
	@Override
	public ResponseEntity<?> incluir(Curso entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> alterar(Curso entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> buscarPorId(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> pesquisar(Curso entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@GetMapping("/listar")
	public ResponseEntity<?> listar() {
		List<Curso> lista = this.cursoService.listarCursos();
		return new ResponseEntity<List<Curso>>(lista,HttpStatus.OK);
	}

}
