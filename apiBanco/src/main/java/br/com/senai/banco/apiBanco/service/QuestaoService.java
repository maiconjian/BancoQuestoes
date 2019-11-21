package br.com.senai.banco.apiBanco.service;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Optional;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.senai.banco.apiBanco.dto.TarefaDto;
import br.com.senai.banco.apiBanco.model.Questao;
import br.com.senai.banco.apiBanco.repository.QuestaoRepository;
import br.com.senai.banco.apiBanco.repository.filter.QuestaoFilter;
import br.com.senai.banco.apiBanco.service.interfaces.IQuestaoService;

@Service
public class QuestaoService implements IQuestaoService {

	@Autowired
	private QuestaoRepository questaoRepo;
	
	@Override
	public Questao incluir(Questao entity) throws Exception {
		return null;
	}
	
	@Override
	public Questao incluir(MultipartFile enunciadoImg,MultipartFile suporteImg, String entity) throws IOException {
		ObjectMapper mapper = new ObjectMapper();
		Questao questao=null;
		questao = mapper.readValue(entity, Questao.class);
		if(enunciadoImg != null) {
			String caminho = "C:\\Users\\maicon\\Pictures\\repositorioFotos\\"+enunciadoImg.getOriginalFilename();
			File file = new File(caminho);
			enunciadoImg.transferTo(file);
			questao.setEnunciado(caminho);
		}
		
		if(suporteImg != null) {
			String caminho = "C:\\Users\\maicon\\Pictures\\repositorioFotos\\"+suporteImg.getOriginalFilename();
			File file = new File(caminho);
			suporteImg.transferTo(file);
			questao.setSuporte(caminho);
		}
		
		return this.questaoRepo.save(questao);
		
	}
	@Override
	public Questao alterar(MultipartFile enunciadoImg, MultipartFile suporteImg, String entity) throws  Exception {
		ObjectMapper mapper = new ObjectMapper();
		Questao questao=null;
		try {
			questao = mapper.readValue(entity, Questao.class);
		} catch (IOException e) {
			e.printStackTrace();
		}
		Optional<Questao> questaoEncontrada = this.questaoRepo.findById(questao.getId());
		if(questaoEncontrada.isPresent()) {
			if(enunciadoImg != null) {
				String caminho = "C:\\Users\\maicon\\Pictures\\repositorioFotos\\"+enunciadoImg.getOriginalFilename();
				File file = new File(caminho);
				enunciadoImg.transferTo(file);
				questao.setEnunciado(caminho);
			}
			
			if(suporteImg != null) {
				String caminho = "C:\\Users\\maicon\\Pictures\\repositorioFotos\\"+suporteImg.getOriginalFilename();
				File file = new File(caminho);
				suporteImg.transferTo(file);
				questao.setSuporte(caminho);
			}
			if(questao.getEnunciado() == null || questao.getEnunciado().equals("")) {
				questao.setEnunciado(questaoEncontrada.get().getEnunciado());
			}
			if(questao.getSuporte() == null || questao.getSuporte().equals("")) {
				questao.setSuporte(questaoEncontrada.get().getSuporte());
			}
			
			return this.questaoRepo.save(questao);
		}
		
		
		return questaoEncontrada.get();
	}

	

//	@Override
//	public QuestaoDto buscar(long id) throws IOException {
//		Questao questao = this.questaoRepo.findById(id).get();
//		QuestaoDto questaoRetorno = new QuestaoDto();
//		
//		if(questao != null) {
//			if(isPath(questao.getEnunciado())) {
//				questaoRetorno.setEnunciadoImg(retornoImagem(questao.getEnunciado()));
//			}
//			if(isPath(questao.getSuporte())) {
//				questaoRetorno.setSuporteImg(retornoImagem(questao.getSuporte()));
//			}
//			questaoRetorno.setQuestao(questao);
//			return questaoRetorno;
//		}
//		return questaoRetorno;
//		
//		
//	}

	@Override
	public Questao alterar(Questao entity) {
		Optional<Questao> questao = this.questaoRepo.findById(entity.getId());
		if(questao.isPresent()) {
			return this.questaoRepo.save(entity);
		}
		
		return questao.get();
	}

	@Override
	public Questao buscarPorId(long id) {
		return this.questaoRepo.findById(id).get();
	}

	@Override
	public List<Questao> pesquisar(QuestaoFilter filtro) {
		return this.questaoRepo.pesquisar(filtro);
	}

	
//	private boolean isPath(String caminho) {
//		if(caminho.substring(0,2).equals("C:")) {
//			return true;
//			
//		}
//		return false;
//	}
	
	public byte[] retornoImagem(TarefaDto tarefa) throws IOException {
//		String nomeArquivo = caminho.replace("C:\\Users\\maicon\\Pictures\\repositorioFotos\\","");
		File file = new File(tarefa.getCaminho());
//		byte[] bytes = new byte[(int) file.length()];
//		FileInputStream fis = new FileInputStream(file);
//		fis.read(bytes);
//		fis.close();
		
		InputStream is = new BufferedInputStream(new FileInputStream(file));
		return IOUtils.toByteArray(is);
		
	}

	@Override
	public List<Questao> questoesParaAvaliacao(long idusuario) {
		return this.questaoRepo.questoesParaAvaliacao(idusuario);
	}

	@Override
	public void publicarQuestao(long idQuestao) {
		this.questaoRepo.publicarQuestao(idQuestao);
		
	}

	@Override
	public void rejeitarQuestao(String observacao,long idQuestao) {
		this.questaoRepo.rejeitarQuestao(observacao,idQuestao);
		
	}

	@Override
	public List<Questao> listarQuestoesEmEspera(boolean publicado,boolean rejeitado,long idAutor) {
		return this.questaoRepo.listarQuestoesEmEspera(publicado,rejeitado,idAutor);
	}


	

}
