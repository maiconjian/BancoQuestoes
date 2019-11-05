package br.com.senai.banco.apiBanco.repository.impl.questao;

import java.util.List;

import br.com.senai.banco.apiBanco.model.Questao;
import br.com.senai.banco.apiBanco.repository.filter.QuestaoFilter;

public interface QuestaoRepositoryQuery {
	
	public List<Questao> pesquisar(QuestaoFilter filter);

}
