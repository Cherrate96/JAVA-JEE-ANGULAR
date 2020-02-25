package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import com.example.demo.domain.Produit;
import com.example.demo.repository.ProduitRepository;

@SpringBootApplication
public class BackendGestionProduitsApplication implements CommandLineRunner{
@Autowired
	private ProduitRepository produitRepository;
@Autowired
private RepositoryRestConfiguration config;
	public static void main(String[] args) {
		SpringApplication.run(BackendGestionProduitsApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		produitRepository.save(new Produit(null, "ordinateur", 9842.3, 29));
		produitRepository.save(new Produit(null, "imprimante", 100.44, 33));
		produitRepository.save(new Produit(null, "souris", 192.2, 86));
		produitRepository.save(new Produit(null, "clavier", 222.3, 433));
  
		
	}
//	@Bean
//    public CorsFilter corsFilter() {
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        CorsConfiguration config = new CorsConfiguration();
//        config.setAllowCredentials(true);
//        config.addAllowedOrigin("*");
//        config.addAllowedHeader("*");
//        config.addAllowedMethod("OPTIONS");
//        config.addAllowedMethod("GET");
//        config.addAllowedMethod("POST");
//        config.addAllowedMethod("PUT");
//        config.addAllowedMethod("DELETE");
//        source.registerCorsConfiguration("/**", config);
//        return new CorsFilter(source);
//    }


}
