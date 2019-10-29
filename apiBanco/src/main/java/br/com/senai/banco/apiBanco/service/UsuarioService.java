package br.com.senai.banco.apiBanco.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.apache.tomcat.util.http.fileupload.ByteArrayOutputStream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

import br.com.senai.banco.apiBanco.dto.LoginDto;
import br.com.senai.banco.apiBanco.mail.Mailer;
import br.com.senai.banco.apiBanco.model.Usuario;
import br.com.senai.banco.apiBanco.repository.UsuarioRepository;
import br.com.senai.banco.apiBanco.repository.filter.UsuarioFilter;
import br.com.senai.banco.apiBanco.service.interfaces.IUsuarioService;
import br.com.senai.banco.apiBanco.util.GerarSenhaAleatoria;

@Service
public class UsuarioService implements IUsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;

	public BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

	@Autowired
	private Mailer mailer;

	@Override
	public Usuario incluir(Usuario entity) throws Exception {
		Optional<Usuario> user = this.usuarioRepository.findByLogin(entity.getLogin());

		Usuario usuarioSalvo = new Usuario();

		if (user.isPresent()) {
			// throw new UsernameNotFoundException("Login ja cadastrado");
			return null;
		}

		usuarioSalvo = this.usuarioRepository.save(entity);
		gerarEnviarSenhaAleatoria(usuarioSalvo);

		return usuarioSalvo;
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
				// throw new UsernameNotFoundException("Login ja cadastrado");
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
	public void alterarSenha(Usuario entity) {
		Optional<Usuario> usuario = this.usuarioRepository.findById(entity.getId());

		if (usuario.isPresent()) {
			entity.setSenha(encoder.encode(entity.getSenha()));
			this.usuarioRepository.alterarSenha(entity.getSenha(), entity.getId());
		}

	}

	@Override
	public void gerarEnviarSenhaAleatoria(Usuario usuario) throws Exception {
		String senha = GerarSenhaAleatoria.gerarSenha(6);

		List<Usuario> destinatarios = new ArrayList<>();
		destinatarios.add(usuario);

		mailer.enviarNovaSenha(senha, destinatarios, "Bem Vindo ao Banco de Questões SENAI", "mail/bem-vindo");

		this.usuarioRepository.alterarSenha(encoder.encode(senha), usuario.getId());
	}

//	@Override
//	public long autenticarUsuario(LoginDto login) throws Exception {
//		Optional<Usuario> usuario = this.usuarioRepository.findByLogin(login.getLogin());
//		if (usuario.isPresent()) {
//			if (encoder.matches(login.getSenha(), usuario.get().getSenha())) {
//				String codigo = GerarSenhaAleatoria.gerarSenha(6);
//
//				List<Usuario> destinatarios = new ArrayList<>();
//				destinatarios.add(usuario.get());
//
//				mailer.enviarNovaSenha(codigo, destinatarios, "Código de Acesso", "mail/codigo-acesso");
//
//				this.usuarioRepository.salvaCodigoAcesso(encoder.encode(codigo), usuario.get().getId());
//				return usuario.get().getId();
//			}
//
//		}
//		return 0;
//	}

//	@Override
//	public Usuario verificaCodigo(long idUsuario, String codigo) {
//		Optional<Usuario> usuario = this.usuarioRepository.findById(idUsuario);
//
//		if (usuario.isPresent()) {
//			if (encoder.matches(codigo, usuario.get().getCodigoAcesso())) {
//				return usuario.get();
//			}
//		}
//
//		return usuario.get();
//
//	}

	
	
	//codigo do qrcode
	private byte[] getQRCodeImage(String text, int width, int height) throws WriterException, IOException {
		QRCodeWriter qrCodeWriter = new QRCodeWriter();
		BitMatrix bitMatrix = qrCodeWriter.encode(text, BarcodeFormat.QR_CODE, width, height);

		ByteArrayOutputStream pngOutputStream = new ByteArrayOutputStream();
		MatrixToImageWriter.writeToStream(bitMatrix, "PNG", pngOutputStream);
		byte[] pngData = pngOutputStream.toByteArray();
		return pngData;
	}

	@Override
	public byte[] autenticarUsuario(LoginDto login) throws Exception {
		Optional<Usuario> usuario = this.usuarioRepository.findByLogin(login.getLogin());
		if (usuario.isPresent()) {
			if (encoder.matches(login.getSenha(), usuario.get().getSenha())) {
				String codigo = GerarSenhaAleatoria.gerarSenha(6);
				System.out.println(codigo);

				this.usuarioRepository.salvaCodigoAcesso(encoder.encode(codigo), usuario.get().getId());
				return getQRCodeImage(codigo, 200,200);
			}

		}
		return null;
	}

	@Override
	public Usuario verificaCodigo(String login, String codigo) {
		Optional<Usuario> usuario = this.usuarioRepository.findByLogin(login);

		if (usuario.isPresent()) {
			if (encoder.matches(codigo, usuario.get().getCodigoAcesso())) {
				return usuario.get();
			}
		}

		return null;
	}

}
