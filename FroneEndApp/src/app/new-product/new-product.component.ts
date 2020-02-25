import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../Services/product-service.service';
import {Router} from '@angular/router';
import {Produit} from '../Model/produit.model';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
public currentProduit:Produit=undefined;
public cpt:number=1;
  constructor(private  prodServ:ProductServiceService,private  route:Router) { }

  ngOnInit(): void {
  }

  onSaveProduct(value: any) {
    this.prodServ.saveProduit(this.prodServ.host+"/addproduits",value)
      .subscribe(res=> {
        this.currentProduit=res;
        this.cpt=2;
      },err=>{
        console.log("err"+err);
      });
  }

  onNewProduits() {
    this.cpt=1;
  }
}
