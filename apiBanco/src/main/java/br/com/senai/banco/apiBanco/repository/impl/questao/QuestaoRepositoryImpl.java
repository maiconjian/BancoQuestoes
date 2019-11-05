package br.com.senai.banco.apiBanco.repository.impl.questao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.apache.commons.lang3.StringUtils;

import br.com.senai.banco.apiBanco.model.Questao;
import br.com.senai.banco.apiBanco.model.Questao_;
import br.com.senai.banco.apiBanco.repository.filter.QuestaoFilter;

public class QuestaoRepositoryImpl implements QuestaoRepositoryQuery {

	@PersistenceContext
	private EntityManager manager;
	
	@Override
	public List<Questao> pesquisar(QuestaoFilter filter) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<Questao> criteria = builder.createQuery(Questao.class);
		Root<Questao> root = criteria.from(Questao.class);
		
		Predicate[] predicates = gerarRestricoes(filter, builder, root);
		criteria.where(predicates);
		
		TypedQuery<Questao> query = manager.createQuery(criteria);
		
		return query.getResultList();
	}
	
	
	private Predicate[] gerarRestricoes(QuestaoFilter filter,CriteriaBuilder builder,Root<Questao> root) {
		List<Predicate> predicates = new ArrayList<>();
		
		if(!StringUtils.isEmpty(filter.getUnidadeCurricular())) {
			predicates.add(builder.equal(root.join("unidadeCurricular").<String>get("nome"),filter.getUnidadeCurricular()));
		}
		if(!StringUtils.isEmpty(filter.getCurso())) {
			predicates.add(builder.equal(root.join("unidadeCurricular").join("Curso").<String>get("nome"), filter.getCurso()));
		}
		if(!StringUtils.isEmpty(filter.getNivelDificuldade())) {
			predicates.add(builder.equal(root.get(Questao_.dificuldade), filter.getNivelDificuldade()));
		}
		predicates.add(builder.equal(root.get(Questao_.publicado), true));
		
		return predicates.toArray(new Predicate[predicates.size()]);
		
	}

}
