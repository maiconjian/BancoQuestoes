package br.com.senai.banco.apiBanco;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class gerarSenha {

	public static void main(String[] args) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		System.out.println(encoder.encode("admin"));

	}

}
