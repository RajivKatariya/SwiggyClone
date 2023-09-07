import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public product = new BehaviorSubject<any>([])
  public cartItem:any=[];
  constructor() { }

  // Get Product
  getProduct(){
    return this.product.asObservable();
  }
  // Add To Cart
  addTocart(productItem:any){
    productItem.quantity=1
    this.cartItem.push(productItem);
    this.product.next(this.cartItem);
    this.getTotalPrice();
    // this.plusItem();
  }

  // TotalPrice
getTotalPrice():number{
  let grandtotal=0;
  this.cartItem.map((a:any)=>{
    grandtotal +=a.total;
    console.log(grandtotal);
  })
  return grandtotal;
}


plusItem(){
  let plusItem=0;
  this.cartItem.map((b:any)=>{
    plusItem *=b.total;
  })
}

// Empty Item
removeallcart(){
  this.cartItem=[]
  this.product.next(this.cartItem);
}

// Delete Item
removecartItem(Item:any){
  this.cartItem.map((a:any,index:any)=>{
   if(Item.id===a.id)
   this.cartItem.splice(index,1)
  });
  this.product.next(this.cartItem);
}
}
