package br.com.senai.banco.apiBanco.util;

import org.springframework.http.ResponseEntity;

public interface IGenericResource <T,F,Serializable>{

	public ResponseEntity<?> incluir(T entity) throws Exception;
	
	public ResponseEntity<?> alterar(T entity);
	
	public ResponseEntity<?> buscarPorId(long id);
	
	public ResponseEntity<?> pesquisar(F entity);

}
