package br.com.senai.banco.apiBanco.resource.interfaces;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.Serializable;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import br.com.senai.banco.apiBanco.dto.QuestaoDto;
import br.com.senai.banco.apiBanco.model.Questao;
import br.com.senai.banco.apiBanco.util.IGenericResource;

public interface IQuestaoResource extends IGenericResource<Questao, Questao, Serializable>{
	
	
	public ResponseEntity<?> incluirQuestao(MultipartFile enunciadoImg,MultipartFile suportImg ,String entity) throws FileNotFoundException, IOException;
	
	public ResponseEntity<?> buscar(long id) throws IOException;
}
