package br.com.senai.banco.apiBanco.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.senai.banco.apiBanco.model.Questao;
import br.com.senai.banco.apiBanco.repository.impl.questao.QuestaoRepositoryQuery;

public interface QuestaoRepository extends CrudRepository<Questao, Long>,QuestaoRepositoryQuery {

}
