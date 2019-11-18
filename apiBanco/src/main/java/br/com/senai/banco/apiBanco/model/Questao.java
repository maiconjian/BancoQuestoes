package br.com.senai.banco.apiBanco.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="QUESTAO")
public class Questao {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID")
	private long id;
	
	@Column(name="OBSERVACAO")
	private String observacao;
	
	@Column(name="CAPACIDADE")
	private String capacidade;
	
	@Column(name="OBJETO_CONHECIMENTO")
	private String objetoConhecimento;
	
	@Column(name="DIFICULDADE")
	private String dificuldade;
	
	@Column(name="ENUNCIADO")
	private String enunciado;
	
	@Column(name="SUPORTE")
	private String suporte;
	
	@Column(name="COMANDO")
	private String comando;
	
	
	@ManyToOne(fetch = FetchType.EAGER,  cascade=CascadeType.ALL)
	@JoinColumn(name = "ID_ALTERNATIVA_A")
	private Alternativa alternativaA;
	
	@ManyToOne(fetch = FetchType.EAGER,  cascade=CascadeType.ALL)
	@JoinColumn(name = "ID_ALTERNATIVA_B")
	private Alternativa alternativaB;
	
	@ManyToOne(fetch = FetchType.EAGER,  cascade=CascadeType.ALL)
	@JoinColumn(name = "ID_ALTERNATIVA_C")
	private Alternativa alternativaC;
	
	@ManyToOne(fetch = FetchType.EAGER,  cascade=CascadeType.ALL)
	@JoinColumn(name = "ID_ALTERNATIVA_D")
	private Alternativa alternativaD;
	
	@ManyToOne(fetch = FetchType.EAGER,  cascade=CascadeType.ALL)
	@JoinColumn(name = "ID_ALTERNATIVA_E")
	private Alternativa alternativaE;
	
	
	
	@Column(name="PUBLICADO")
	private boolean publicado;
	
	@Column(name="REJEITADO")
	private boolean rejeitado;
	
	@ManyToOne()
	@JoinColumn(name = "ID_UNIDADE_CURRICULAR")
	private UnidadeCurricular unidadeCurricular;
	
	@ManyToOne()
	@JoinColumn(name = "ID_AUTOR")
	private Usuario autor;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getObservacao() {
		return observacao;
	}

	public void setObservacao(String observacao) {
		this.observacao = observacao;
	}

	public String getCapacidade() {
		return capacidade;
	}

	public void setCapacidade(String capacidade) {
		this.capacidade = capacidade;
	}

	public String getObjetoConhecimento() {
		return objetoConhecimento;
	}

	public void setObjetoConhecimento(String objetoConhecimento) {
		this.objetoConhecimento = objetoConhecimento;
	}

	public String getDificuldade() {
		return dificuldade;
	}

	public void setDificuldade(String dificuldade) {
		this.dificuldade = dificuldade;
	}

	public String getEnunciado() {
		return enunciado;
	}

	public void setEnunciado(String enunciado) {
		this.enunciado = enunciado;
	}

	public String getSuporte() {
		return suporte;
	}

	public void setSuporte(String suporte) {
		this.suporte = suporte;
	}

	public String getComando() {
		return comando;
	}

	public void setComando(String comando) {
		this.comando = comando;
	}

	public Alternativa getAlternativaA() {
		return alternativaA;
	}

	public void setAlternativaA(Alternativa alternativaA) {
		this.alternativaA = alternativaA;
	}

	public Alternativa getAlternativaB() {
		return alternativaB;
	}

	public void setAlternativaB(Alternativa alternativaB) {
		this.alternativaB = alternativaB;
	}

	public Alternativa getAlternativaC() {
		return alternativaC;
	}

	public void setAlternativaC(Alternativa alternativaC) {
		this.alternativaC = alternativaC;
	}

	public Alternativa getAlternativaD() {
		return alternativaD;
	}

	public void setAlternativaD(Alternativa alternativaD) {
		this.alternativaD = alternativaD;
	}

	public Alternativa getAlternativaE() {
		return alternativaE;
	}

	public void setAlternativaE(Alternativa alternativaE) {
		this.alternativaE = alternativaE;
	}

	public boolean isPublicado() {
		return publicado;
	}

	public void setPublicado(boolean publicado) {
		this.publicado = publicado;
	
	}
	
	

	public boolean isRejeitado() {
		return rejeitado;
	}

	public void setRejeitado(boolean rejeitado) {
		this.rejeitado = rejeitado;
	}

	public UnidadeCurricular getUnidadeCurricular() {
		return unidadeCurricular;
	}

	public void setUnidadeCurricular(UnidadeCurricular unidadeCurricular) {
		this.unidadeCurricular = unidadeCurricular;
	}

	public Usuario getAutor() {
		return autor;
	}

	public void setAutor(Usuario autor) {
		this.autor = autor;
	}
	
	
}
