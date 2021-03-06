package br.com.senai.banco.apiBanco.service.interfaces;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.Serializable;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import br.com.senai.banco.apiBanco.model.Questao;
import br.com.senai.banco.apiBanco.repository.filter.QuestaoFilter;
import br.com.senai.banco.apiBanco.util.IGenericService;

public interface IQuestaoService extends IGenericService<Questao, QuestaoFilter, Serializable>{

	
	public Questao incluir(MultipartFile enunciadoImg,MultipartFile suporteImg,String entity) throws FileNotFoundException, IOException;

	public Questao alterar(MultipartFile enunciadoImg,MultipartFile suporteImg,String entity) throws FileNotFoundException, IOException, Exception;
	
	public List<Questao> questoesParaAvaliacao(long idusuario);
	
	public void publicarQuestao(long idQuestao);
	
	public void rejeitarQuestao(String observacao,long idQuestao);
	
	public List<Questao> listarQuestoesEmEspera(boolean publicado,boolean rejeitado,long idAutor);

}
