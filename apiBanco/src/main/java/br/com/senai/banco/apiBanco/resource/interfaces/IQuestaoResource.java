package br.com.senai.banco.apiBanco.resource.interfaces;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.Serializable;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import br.com.senai.banco.apiBanco.dto.RejeitadoDto;
import br.com.senai.banco.apiBanco.dto.TarefaDto;
import br.com.senai.banco.apiBanco.model.Questao;
import br.com.senai.banco.apiBanco.repository.filter.QuestaoFilter;
import br.com.senai.banco.apiBanco.util.IGenericResource;

public interface IQuestaoResource extends IGenericResource<Questao, QuestaoFilter, Serializable>{
	
	
	public ResponseEntity<?> incluirQuestao(MultipartFile enunciadoImg,MultipartFile suportImg ,String entity) throws FileNotFoundException, IOException;
	
//	public ResponseEntity<?> buscar(long id) throws IOException;
	
	public byte[] buscarFoto(TarefaDto tarefa) throws IOException;
	
	public ResponseEntity<?> questoesParaAvaliacao(long idUsuario);
	
	public void publicarQuestao(long idQuestao);
	
	public void rejeitarQuestao(RejeitadoDto rejeitado);
	
	public ResponseEntity<?>listarQuestoesEmEspera(Integer publicado,Integer rejeitado,long idAutor);
}
