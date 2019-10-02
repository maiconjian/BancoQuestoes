package br.com.senai.banco.apiBanco.resource;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.senai.banco.apiBanco.model.Usuario;
import br.com.senai.banco.apiBanco.repository.filter.UsuarioFilter;
import br.com.senai.banco.apiBanco.resource.interfaces.IUsuarioResource;

@RestController
@RequestMapping("/usuario")
public class UsuarioResource implements IUsuarioResource {

	@Override
	public ResponseEntity<?> incluir(Usuario entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> alterar(Usuario entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> buscarPorId(Usuario entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> pesquisar(UsuarioFilter entity) {
		// TODO Auto-generated method stub
		return null;
	}

}
