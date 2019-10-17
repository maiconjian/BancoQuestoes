package br.com.senai.banco.apiBanco.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.senai.banco.apiBanco.model.Perfil;
import br.com.senai.banco.apiBanco.resource.interfaces.IPerfilResource;
import br.com.senai.banco.apiBanco.service.PerfilService;
@RestController
@RequestMapping("/perfil")
public class PerfilResource implements IPerfilResource {

	@Autowired
	private PerfilService perfilService;
	
	@Override
	public ResponseEntity<?> incluir(Perfil entity) throws Exception {
		return null;
	}

	@Override
	public ResponseEntity<?> alterar(Perfil entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> buscarPorId(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> pesquisar(Perfil entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@GetMapping("/listar")
	public ResponseEntity<?> listar() {
		List<Perfil> lista = this.perfilService.listarPerfis();
		return new ResponseEntity<List<Perfil>>(lista,HttpStatus.OK);
	}

}
