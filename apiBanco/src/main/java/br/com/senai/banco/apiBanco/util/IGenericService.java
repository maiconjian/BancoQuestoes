package br.com.senai.banco.apiBanco.util;

import java.util.List;

public interface IGenericService <T,F, Serializable> {
	
	
	public T incluir(T entity) throws Exception;
	
	public T alterar(T entity);
	
	public T buscarPorId(long id);
	
	public List<T> pesquisar(F filtro);
}
