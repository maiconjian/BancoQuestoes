package br.com.senai.banco.apiBanco.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.senai.banco.apiBanco.model.Usuario;
import br.com.senai.banco.apiBanco.repository.UsuarioRepository;
import br.com.senai.banco.apiBanco.repository.filter.UsuarioFilter;
import br.com.senai.banco.apiBanco.service.interfaces.IUsuarioService;

@Service
public class UsuarioService implements IUsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Override
	public Usuario incluir(Usuario entity) {
		Optional<Usuario> user = this.usuarioRepository.findByLogin(entity.getLogin());
		if (user.isPresent()) {
			//throw new UsernameNotFoundException("Login ja cadastrado");
			return null;
		}
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		entity.setSenha(encoder.encode(entity.getSenha()));
		return this.usuarioRepository.save(entity);
		
	}

	@Override
	public Usuario alterar(Usuario entity) {
		Optional<Usuario> usuario = this.usuarioRepository.findById(entity.getId());
		Usuario usuarioSalvo = new Usuario();
		
		if (usuario.isPresent()) {
			usuario = this.usuarioRepository.findByLogin(entity.getLogin());
			if (!usuario.isPresent() || usuario.get().getId() == entity.getId()) {
				entity.setSenha(usuario.get().getSenha());
				usuarioSalvo = this.usuarioRepository.save(entity);
				return usuarioSalvo;
			} else {
				//throw new UsernameNotFoundException("Login ja cadastrado");
			}
		}
		return usuarioSalvo;	
	}

	@Override
	public Usuario buscarPorId(long id) {	
		return this.usuarioRepository.findById(id).get();
	}

	@Override
	public List<Usuario> pesquisar(UsuarioFilter filtro) {
		return this.usuarioRepository.pesquisar(filtro);
	}

	@Override
	public boolean alterarSenha(Usuario entity) {
//		Optional<Usuario> usuario = this.usuarioRepository.findById(entity.getId());
//		
//		if(usuario.isPresent()) {
//			return this.usuarioRepository.alterarSenha(entity.getSenha(), entity.getId());
//		}
		
		return false;
		
		
	}

}
