package br.com.senai.banco.apiBanco.repository.impl;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.util.StringUtils;

import br.com.senai.banco.apiBanco.model.Usuario;
import br.com.senai.banco.apiBanco.model.Usuario_;
import br.com.senai.banco.apiBanco.repository.filter.UsuarioFilter;

public class UsuarioRepositoryImpl implements UsuarioRepositoryQuery {

	@PersistenceContext
	private EntityManager manager;
	
	
	@Override
	public List<Usuario> pesquisar(UsuarioFilter usuarioFiltro) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<Usuario> criteria = builder.createQuery(Usuario.class);
		Root<Usuario> root = criteria.from(Usuario.class);
		
		Predicate[] predicates = gerarRestricoes(usuarioFiltro, builder, root);
		criteria.where(predicates);
		
		TypedQuery<Usuario> query = manager.createQuery(criteria);
		
		return query.getResultList();
	}
	
	
	private Predicate[] gerarRestricoes(UsuarioFilter usuarioFiltro,CriteriaBuilder builder,Root<Usuario> root) {
		List<Predicate> predicates = new ArrayList<>();
		
		if(!StringUtils.isEmpty(usuarioFiltro.getNome())) {
			predicates.add(builder.like(builder.lower(root.get(Usuario_.nome)), usuarioFiltro.getNome()+"%"));
		}
		
		if(!StringUtils.isEmpty(usuarioFiltro.getEmail())) {
			predicates.add(builder.like(builder.lower(root.get(Usuario_.email)), usuarioFiltro.getEmail()+"%"));
		}
		
		predicates.add(builder.equal(root.get(Usuario_.ativo), usuarioFiltro.isAtivo() ));
		
		
		return predicates.toArray(new Predicate[predicates.size()]);
		
	}

}
