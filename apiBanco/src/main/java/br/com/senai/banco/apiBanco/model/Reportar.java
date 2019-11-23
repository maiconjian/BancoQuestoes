package br.com.senai.banco.apiBanco.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="REPORTAR")
public class Reportar {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID")
	private long id;
	
	@Column(name="DESCRICAO")
	private String descricao;
	
	@Column(name="FUNDAMENTO")
	private boolean fundamento;
	
	@Column(name="ATIVO")
	private boolean ativo;
	
	@ManyToOne()
	@JoinColumn(name="ID_QUESTAO")
	private Questao questao;
	
	@ManyToOne()
	@JoinColumn(name="ID_USUARIO_REPORTOU")
	private Usuario usuarioReportou;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public boolean isFundamento() {
		return fundamento;
	}

	public void setFundamento(boolean fundamento) {
		this.fundamento = fundamento;
	}

	public boolean isAtivo() {
		return ativo;
	}

	public void setAtivo(boolean ativo) {
		this.ativo = ativo;
	}

	public Questao getQuestao() {
		return questao;
	}

	public void setQuestao(Questao questao) {
		this.questao = questao;
	}

	public Usuario getUsuarioReportou() {
		return usuarioReportou;
	}

	public void setUsuarioReportou(Usuario usuarioReportou) {
		this.usuarioReportou = usuarioReportou;
	}
	
	
}
