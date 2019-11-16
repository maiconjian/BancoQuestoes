package br.com.senai.banco.apiBanco.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.senai.banco.apiBanco.model.Questao;
import br.com.senai.banco.apiBanco.repository.impl.questao.QuestaoRepositoryQuery;

public interface QuestaoRepository extends CrudRepository<Questao, Long>,QuestaoRepositoryQuery {
	
	 @Transactional
	 @Query(value="SELECT * FROM QUESTAO WHERE PUBLICADO = 0 AND ID_AUTOR != ?1",nativeQuery = true)
	 List<Questao> questoesParaAvaliacao(long idusuario);
	 
	 @Modifying
	 @Transactional
	 @Query(value="UPDATE QUESTAO SET PUBLICADO = 1 WHERE ID=?1",nativeQuery = true)
	 public void publicarQuestao(long idQuestao);

}
