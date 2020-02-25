import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Produit} from '../Model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
public host:string="http://localhost:8080";
  public url:string="http://localhost:8080";

  constructor(private  _http:HttpClient) { }

public  getProducts(currentPage:number,size:number)
{
  return this._http.get(this.host+"/produits"+"?page="+currentPage+"&size="+size);

}
public getAllProduits()
{
  return this._http.get<Produit>(this.host+"/listproducts")
}
public getProduitByDesignation(currentPage:number,size:number,mc:string)
{
  return this._http.get(this.host+"/designation?page="+currentPage+"&size="+size+"&mc="+mc);
}
public deleteProduits(id:number)
{
  return this._http.delete(this.host+"/deleteproduits/"+id);
}

public saveProduit(url,data)
{
  return this._http.post<Produit>(url,data);

}
public UpdateProduit(url,data)
{
  return this._http.put<Produit>(this.host+"/updateproduits/"+url,data);

}

public getProduitById(url)
{
  return this._http.get<Produit>(this.host+"/produitsbyId/"+url);
}
}
