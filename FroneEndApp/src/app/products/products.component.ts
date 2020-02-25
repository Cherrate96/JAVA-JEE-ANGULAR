import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductServiceService} from '../Services/product-service.service';
import {Produit} from '../Model/produit.model';
import {Router} from '@angular/router';
import {toBase64String} from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  listproduct:any;
  public size:number=5;
  public currentPage:number=0;
  public totalPages:number;
  public pages:Array<number>;
  public currentKeyword: string="";
  public prod:Produit;
  constructor(private  prodServ:ProductServiceService,private router:Router) { }
  ngOnInit(): void {
    this.onGetProduct();
  }

  onGetProduct() {
    this.prodServ.getProducts(this.currentPage,this.size)
      .subscribe(data=>{
        this.totalPages=data["totalPages"];
        this.pages=new Array<number>(this.totalPages);
        this.listproduct=data;

      },err=>{
        console.log(err);
      });


  }

  onPageProduct(i: number) {
    this.currentPage=i;
    this.chercherProduits();

  }

  onChercher(form:any)
  {
    this.currentPage=0;
    this.currentKeyword=form.keyword;
    this.chercherProduits();
  }

  chercherProduits() {
    this.prodServ.getProduitByDesignation(this.currentPage,this.size,this.currentKeyword)
      .subscribe(data=>{
        this.totalPages=data["totalPages"];
        this.pages=new Array<number>(this.totalPages);
        this.listproduct=data;
      },error => {
        console.log(error);
      });
  }

  onDeleteProduct(p) {
    let conf=confirm("Etes vous sure ?");
    if (conf)
{
  this.prodServ.deleteProduits(p.id)
    .subscribe(data=>{
      this.chercherProduits();
    },err=>{

    })

}
  }

  onEditProduct(p)
  {
    let url=p.id;
    this.router.navigateByUrl("/editproduct/"+btoa(url));

  }

}

