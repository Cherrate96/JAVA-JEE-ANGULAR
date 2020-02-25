export  class  Produit {
  public id:number;
  public designation:string;
  public prix:number;
  public quantite:number;
  constructor(id:number,designation:string,prix:number,quantite:number) {
    this.id=id;
    this.designation=designation;
    this.prix=prix;
    this.quantite=quantite;
  }

}
