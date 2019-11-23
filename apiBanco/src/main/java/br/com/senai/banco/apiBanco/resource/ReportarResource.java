package br.com.senai.banco.apiBanco.resource;

import org.springframework.http.ResponseEntity;

import br.com.senai.banco.apiBanco.model.Reportar;
import br.com.senai.banco.apiBanco.resource.interfaces.IReportarResource;

public class ReportarResource  implements IReportarResource{

	@Override
	public ResponseEntity<?> incluir(Reportar entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> alterar(Reportar entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> buscarPorId(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> pesquisar(Reportar entity) {
		// TODO Auto-generated method stub
		return null;
	}

}
