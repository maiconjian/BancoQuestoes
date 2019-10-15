package br.com.senai.banco.apiBanco.util;

import java.io.Serializable;
import java.util.List;

public interface IGenericService <T,F, Serializable> {
	
	
	public T incluir(T entity);
	
	public T alterar(T entity);
	
	public T buscarPorId(long id);
	
	public List<T> pesquisar(F filtro);
}
