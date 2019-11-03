package br.com.senai.banco.apiBanco.dto;

import br.com.senai.banco.apiBanco.model.Questao;

public class QuestaoDto {
	
	private Questao questao;
	
	private byte[] enunciadoImg;
	
	private byte[] suporteImg;

	public Questao getQuestao() {
		return questao;
	}

	public void setQuestao(Questao questao) {
		this.questao = questao;
	}

	public byte[] getEnunciadoImg() {
		return enunciadoImg;
	}

	public void setEnunciadoImg(byte[] enunciadoImg) {
		this.enunciadoImg = enunciadoImg;
	}

	public byte[] getSuporteImg() {
		return suporteImg;
	}

	public void setSuporteImg(byte[] suporteImg) {
		this.suporteImg = suporteImg;
	}

	

	

}
