package br.com.senai.banco.apiBanco.util;

import org.springframework.http.ResponseEntity;

public interface IGenericResource <T,F,Serializable>{

	public ResponseEntity<?> incluir(T entity);
	
	public ResponseEntity<?> alterar(T entity);
	
	public ResponseEntity<?> buscarPorId(T entity);
	
	public ResponseEntity<?> pesquisar(F entity);

}
