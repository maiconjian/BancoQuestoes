package br.com.senai.banco.apiBanco;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class ApiBancoApplication extends SpringBootServletInitializer {

//	public static void main(String[] args) {
//		SpringApplication.run(ApiBancoApplication.class, args);
//	}
	
	@Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(ApiBancoApplication.class);
    }
	public static void main(String[] args) {
		SpringApplication.run(ApiBancoApplication.class, args);
	}

}
