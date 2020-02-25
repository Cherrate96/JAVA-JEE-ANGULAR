import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductServiceService} from '../Services/product-service.service';
import {Produit} from '../Model/produit.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public currentProduct: Produit;
  cpt: number=1;
  private url: string;

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private prodServ:ProductServiceService) { }

  ngOnInit(): void {
    this.url=atob(this.activatedRoute.snapshot.params.id)
    this.prodServ.getProduitById(this.url)
      .subscribe(data=>{
        this.currentProduct=data;

      },err=>{
        console.log(err);
      });  }


  onUpdateProduct(value: any) {
    this.prodServ.UpdateProduit(this.url,value)
      .subscribe(data=>{
        alert("Mise a jour reussite");
        this.router.navigateByUrl("/produits")
      },err=>{
        console.log("err");
      });

  }
}
