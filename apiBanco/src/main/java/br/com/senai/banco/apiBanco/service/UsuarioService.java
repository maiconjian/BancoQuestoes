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
//		Optional<Usuario> usuario = this.usuarioRepository.findById(entity.getId());
//		Usuario usuarioSalvo = new Usuario();
//
//		if (usuario.isPresent()) {
//			entity.getPermissoes().addAll(usuario.get().getPermissoes());
//
//			if (entity.getSenha().isEmpty()) {
//				entity.setSenha(usuario.get().getSenha());
//			} else {
//				BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//				entity.setSenha(encoder.encode(entity.getSenha()));
//			}
//			usuario = this.usuarioRepository.findByLogin(entity.getLogin());
//
//			if (!usuario.isPresent() || usuario.get().getId() == entity.getId()) {
//				usuarioSalvo = this.usuarioRepository.save(entity);
//				return usuarioSalvo;
//			} else {
//				throw new UsernameNotFoundException("Login ja cadastrado");
//			}
//
//		}
//
//		return usuarioSalvo;
		return null;
	}

	@Override
	public Usuario buscarPorId(Usuario entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Usuario> pesquisar(UsuarioFilter filtro) {
		// TODO Auto-generated method stub
		return null;
	}

}
