package br.com.senai.banco.apiBanco.resource;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.senai.banco.apiBanco.model.Usuario;
import br.com.senai.banco.apiBanco.repository.filter.UsuarioFilter;
import br.com.senai.banco.apiBanco.resource.interfaces.IUsuarioResource;
import br.com.senai.banco.apiBanco.service.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioResource implements IUsuarioResource {

	@Autowired
	private UsuarioService usuarioService;
	
	@Override
	@PostMapping("/incluir")
	public ResponseEntity<?> incluir(@RequestBody @Valid Usuario entity) {
		Usuario usuario = this.usuarioService.incluir(entity); 
		return new ResponseEntity<Usuario>(usuario,HttpStatus.OK);
	}

	@Override
	@PutMapping("/alterar")
	public ResponseEntity<?> alterar(@RequestBody @Valid Usuario entity) {
		Usuario usuario = this.usuarioService.alterar(entity); 
		return new ResponseEntity<Usuario>(usuario,HttpStatus.OK);
	}

	@Override
	@GetMapping("/buscarid/{id}")
	public ResponseEntity<?> buscarPorId(@PathVariable("id") long id) {
		Usuario usuario = this.usuarioService.buscarPorId(id); 
		return new ResponseEntity<Usuario>(usuario,HttpStatus.OK);
	}

	@Override
	@GetMapping("/pesquisar")
	public ResponseEntity<?> pesquisar(UsuarioFilter entity) {
		List<Usuario> lista = this.usuarioService.pesquisar(entity);
		return new ResponseEntity<List<Usuario>>(lista,HttpStatus.OK);
	}

	@Override
	@PostMapping("alterarsenha")
	public boolean alterarSenha(@RequestBody Usuario entity) {
//		return this.usuarioService.alterarSenha(entity);
		return false;
	}

}
