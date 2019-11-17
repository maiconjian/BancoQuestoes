package br.com.senai.banco.apiBanco.resource;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.senai.banco.apiBanco.dto.TarefaDto;
import br.com.senai.banco.apiBanco.model.Questao;
import br.com.senai.banco.apiBanco.repository.filter.QuestaoFilter;
import br.com.senai.banco.apiBanco.resource.interfaces.IQuestaoResource;
import br.com.senai.banco.apiBanco.service.QuestaoService;

@RestController
@RequestMapping("/questao")
public class QuestaoResource implements IQuestaoResource {

	@Autowired
	private QuestaoService questaoService;
	
	@Override
//	@PostMapping("/incluir")
	public ResponseEntity<?> incluir(Questao entity) throws Exception {
		Questao questao = this.questaoService.incluir(entity);
		return new ResponseEntity<Questao>(questao,HttpStatus.OK);
	}
	
	@Override
	@PostMapping("/incluir")
	public ResponseEntity<?> incluirQuestao(MultipartFile enunciadoImg,MultipartFile suporteImg, String entity) throws IOException {
		this.questaoService.incluir(enunciadoImg,suporteImg, entity);
		return null;
	}

	@Override
	@PutMapping("/alterar")
	public ResponseEntity<?> alterar(Questao entity) {
		Questao questao = this.questaoService.alterar(entity);
		return new ResponseEntity<Questao>(questao,HttpStatus.OK);
	}

	@Override
	@GetMapping("/buscarid/{id}")
	public ResponseEntity<?> buscarPorId(@PathVariable("id") long id) {
		Questao questao = this.questaoService.buscarPorId(id);
		return new ResponseEntity<Questao>(questao,HttpStatus.OK);
	}
	
//	@Override
//	@GetMapping("/buscarid/{id}")
//	public ResponseEntity<?> buscar(@PathVariable("id")long id) throws IOException {
//		QuestaoDto questaoDto = this.questaoService.buscar(id);
//		return new ResponseEntity<QuestaoDto>(questaoDto,HttpStatus.OK);
//	}

	@Override
	@GetMapping("/pesquisar")
	public ResponseEntity<?> pesquisar(QuestaoFilter entity) {
		List<Questao> lista = this.questaoService.pesquisar(entity);
		return new ResponseEntity<List<Questao>>(lista,HttpStatus.OK);
	}

	@Override
	@PostMapping("/buscarfoto")
	public byte[] buscarFoto(@RequestBody TarefaDto tarefa) throws IOException {
		return this.questaoService.retornoImagem(tarefa);
	}

	@Override
	@GetMapping("/questoesavaliar/{idUsuario}")
	public ResponseEntity<?> questoesParaAvaliacao(@PathVariable("idUsuario")long idUsuario) {
		List<Questao> lista = this.questaoService.questoesParaAvaliacao(idUsuario);
		return new ResponseEntity<List<Questao>>(lista,HttpStatus.OK);
	}

	@Override
	@PutMapping("/publicar/{idQuestao}")
	public void publicarQuestao(@PathVariable("idQuestao")long idQuestao) {
		this.questaoService.publicarQuestao(idQuestao);
		
	}

	@Override
	@PutMapping("/rejeitar/{idQuestao}")
	public void rejeitarQuestao(@PathVariable("idQuestao") long idQuestao) {
		this.questaoService.rejeitarQuestao(idQuestao);
	}



	

}
