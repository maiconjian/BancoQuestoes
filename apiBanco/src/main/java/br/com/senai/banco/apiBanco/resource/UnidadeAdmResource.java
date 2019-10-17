package br.com.senai.banco.apiBanco.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.senai.banco.apiBanco.model.UnidadeAdm;
import br.com.senai.banco.apiBanco.resource.interfaces.IUnidadeAdmResource;
import br.com.senai.banco.apiBanco.service.UnidadeAdmService;
@RestController
@RequestMapping("/unidadeadm")
public class UnidadeAdmResource implements IUnidadeAdmResource{

	@Autowired
	private UnidadeAdmService unidadeService;
	
	@Override
	public ResponseEntity<?> incluir(UnidadeAdm entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> alterar(UnidadeAdm entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> buscarPorId(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> pesquisar(UnidadeAdm entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@GetMapping("/listar")
	public ResponseEntity<?> listar() {
		List<UnidadeAdm> lista = this.unidadeService.listarUnidades();
		return new ResponseEntity<List<UnidadeAdm>>(lista,HttpStatus.OK);
	}

}
