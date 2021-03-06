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

import br.com.senai.banco.apiBanco.dto.LoginDto;
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
	public ResponseEntity<?> incluir(@RequestBody @Valid Usuario entity) throws Exception {
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
	public void alterarSenha(@RequestBody Usuario entity) {
		 this.usuarioService.alterarSenha(entity);
	
	}

//	@Override
//	@PostMapping("/autenticar")
//	public long autenticar(@RequestBody LoginDto login) throws Exception {
//		return this.usuarioService.autenticarUsuario(login);
//	}
	

//	@Override
//	@GetMapping("verificacodigo/{idUsuario}/{codigo}")
//	public ResponseEntity<?> verificaCodigo(@PathVariable("idUsuario")long idUsuario,@PathVariable("codigo")String codigo) {
//		Usuario usuario = this.usuarioService.verificaCodigo(idUsuario, codigo);
//		return new ResponseEntity<Usuario>(usuario,HttpStatus.OK);
//	}
	
	@Override
	@PostMapping("/autenticar")
	public byte[] autenticar(@RequestBody LoginDto login) throws Exception {
		return this.usuarioService.autenticarUsuario(login);
	}

	@Override
	@GetMapping("/verificarcodigo/{login}/{codigo}")
	public ResponseEntity<?> verificaCodigo(@PathVariable("login")String login,@PathVariable("codigo")String codigo) {
		Usuario usuario = this.usuarioService.verificaCodigo(login, codigo);
		return new ResponseEntity<Usuario>(usuario,HttpStatus.OK);
	}
	
	
	
	
	
	

}
