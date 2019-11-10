package br.com.senai.banco.apiBanco.repository.filter;

public class QuestaoFilter {
	
	private long unidadeCurricular;
	
	private long curso;
	
	private String nivelDificuldade;
	
	private boolean publicada;


	public long getUnidadeCurricular() {
		return unidadeCurricular;
	}

	public void setUnidadeCurricular(long unidadeCurricular) {
		this.unidadeCurricular = unidadeCurricular;
	}

	public long getCurso() {
		return curso;
	}

	public void setCurso(long curso) {
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
