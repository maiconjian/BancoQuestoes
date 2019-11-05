package br.com.senai.banco.apiBanco.repository.filter;

public class QuestaoFilter {
	
	private String unidadeCurricular;
	
	private String curso;
	
	private String nivelDificuldade;
	
	private boolean publicada;

	public String getUnidadeCurricular() {
		return unidadeCurricular;
	}

	public void setUnidadeCurricular(String unidadeCurricular) {
		this.unidadeCurricular = unidadeCurricular;
	}

	public String getCurso() {
		return curso;
	}

	public void setCurso(String curso) {
		this.curso = curso;
	}

	public String getNivelDificuldade() {
		return nivelDificuldade;
	}

	public void setNivelDificuldade(String nivelDificuldade) {
		this.nivelDificuldade = nivelDificuldade;
	}

	public boolean isPublicada() {
		return publicada;
	}

	public void setPublicada(boolean publicada) {
		this.publicada = publicada;
	}
	
	

}
