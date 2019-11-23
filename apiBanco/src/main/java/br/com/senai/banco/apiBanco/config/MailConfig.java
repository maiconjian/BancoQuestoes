package br.com.senai.banco.apiBanco.config;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

@Configuration
public class MailConfig {

	@Autowired
	private BancoProperty property;

	@Bean
	public JavaMailSender javaMailSender() {
		Properties props = new Properties();
//		props.put("mail.transport.protocol", "smtp");
//		props.put("mail.smtp.auth", true);
//		props.put("mail.smtp.starttls.enable", true);
//		props.put("mail.smtp.connectiontimeout", 10000);
//		
//		 props.put("mail.smtp.starttls.enable", "true");
		
		props.put("mail.smtps.host","smtp.gmail.com");
		props.put("mail.transport.protocol", "smtp");
		props.put("mail.smtps.auth", "true");
		props.put("mail.smtp.debug", "true");
		props.put("mail.smtp.port", 465);
		props.put("mail.smtp.socketFactory.port", 465);
		props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.socketFactory.fallback", "false");
		props.put("mail.smtp.ssl.enable", true);
		props.put("mail.smtp.connectiontimeout", 10000);

		JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
		mailSender.setJavaMailProperties(props);
		mailSender.setHost(property.getMail().getHost());
		mailSender.setPort(property.getMail().getPort());
		mailSender.setUsername(property.getMail().getUsername());
		mailSender.setPassword(property.getMail().getPassword());
		
		return mailSender;
	}
}
