package br.com.senai.banco.apiBanco.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.senai.banco.apiBanco.model.UnidadeCurricular;
import br.com.senai.banco.apiBanco.resource.interfaces.IUnidadeCurricularResouce;
import br.com.senai.banco.apiBanco.service.UnidadeCurricularService;

@RestController
@RequestMapping("/unidadecurricular")
public class UnidadeCurricularResource implements IUnidadeCurricularResouce {

	@Autowired
	private UnidadeCurricularService unidadeCurricularService;
	
	@Override
	public ResponseEntity<?> incluir(UnidadeCurricular entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> alterar(UnidadeCurricular entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> buscarPorId(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> pesquisar(UnidadeCurricular entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@GetMapping("/listar/{idCurso}")
	public ResponseEntity<?> listar(@PathVariable("idCurso")long idCurso) {
		List<UnidadeCurricular> lista = this.unidadeCurricularService.listarUnidadeCurricular(idCurso);
		return new ResponseEntity<List<UnidadeCurricular>>(lista,HttpStatus.OK);
	}

}
