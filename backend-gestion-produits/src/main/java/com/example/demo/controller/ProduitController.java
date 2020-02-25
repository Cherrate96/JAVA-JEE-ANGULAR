package com.example.demo.controller;

import java.util.List;

import javax.validation.constraints.Size;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Produit;
import com.example.demo.repository.ProduitRepository;
@CrossOrigin("*")
@RestController
public class ProduitController {
@Autowired
	private ProduitRepository produitRepository;



@RequestMapping(value ="/produits" ,method = RequestMethod.GET,params = { "page", "size" } )
public Page<Produit> listproduits(@RequestParam("page") int page, 
		  @RequestParam("size") int size)
{
	return produitRepository.findAll(PageRequest.of(page, size));
//return produitRepository.findAll();
}
@RequestMapping(value ="/designation" ,method = RequestMethod.GET,params = { "page", "size","mc" } )

public Page<Produit> p(@RequestParam("page") int page, 
		  @RequestParam("size") int size,@RequestParam(name = "mc",defaultValue = "") String mc)
{
	return produitRepository.findByDesignationContains(mc, PageRequest.of(page, size)) ;
} 
@RequestMapping(value = "/listproducts",method = RequestMethod.GET)
public List<Produit> listprod()
{
	return produitRepository.findAll();
}


@GetMapping("/produitsbyId/{id}")
public Produit showproduit(@PathVariable("id") Long id)
{
	return produitRepository.findById(id).get();
}
@DeleteMapping("deleteproduits/{id}")
public void deleteproduit(@PathVariable("id") Long id)
{
	 produitRepository.deleteById(id);

}
@PutMapping("/updateproduits/{id}")
public Produit updateproduit(@PathVariable("id") Long id,@RequestBody Produit p)
{
	p.setId(id);
	return produitRepository.save(p);
}
@PostMapping("/addproduits")
public Produit saveproduit(@RequestBody Produit p)
{
	return produitRepository.save(p);
}
}
