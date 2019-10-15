package br.com.senai.banco.apiBanco.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="USUARIO")
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID")
	private long id;
	
	@NotBlank(message = "Nome Obrigatorio")
	@Column(name="NOME")
	private String nome;
	
	@Email(message = "E-mail invalido")
	@NotBlank(message = "E-mail Obrigatorio")
	@Column(name="EMAIL")
	private String email;
	
	@Column(name="LOGIN")
	@NotBlank(message = "Login Obrigatorio")
	private String login;
	
	@Column(name="SENHA")
	//@NotBlank(message = "Senha Obrigatorio")
	private String senha;
	
	@Column(name="CODIGO_ACESSO")
	private String codigoAcesso;
	
	@Column(name="SOLICITA_SENHA")
	private boolean solicitaSenha;
	
	@Column(name="ATIVO")
	private boolean ativo;
	
	@ManyToMany()
	@JoinTable(name = "USUARIO_PERFIL",joinColumns = @JoinColumn(name="ID_USUARIO"),
	inverseJoinColumns = @JoinColumn(name="ID_PERFIL"))
	private List<Perfil> perfis;
	
	@ManyToOne(optional = false)
	@JoinColumn(name="ID_UNIDADE")
	private Unidade unidade;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getCodigoAcesso() {
		return codigoAcesso;
	}

	public void setCodigoAcesso(String codigoAcesso) {
		this.codigoAcesso = codigoAcesso;
	}

	public boolean isSolicitaSenha() {
		return solicitaSenha;
	}

	public void setSolicitaSenha(boolean solicitaSenha) {
		this.solicitaSenha = solicitaSenha;
	}

	public boolean isAtivo() {
		return ativo;
	}

	public void setAtivo(boolean ativo) {
		this.ativo = ativo;
	}

	public List<Perfil> getPerfis() {
		return perfis;
	}

	public void setPerfis(List<Perfil> perfis) {
		this.perfis = perfis;
	}

	public Unidade getUnidade() {
		return unidade;
	}

	public void setUnidade(Unidade unidade) {
		this.unidade = unidade;
	}
	
	
	
	
	
}
