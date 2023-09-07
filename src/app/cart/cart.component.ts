import { Component, OnInit } from '@angular/core';
import { CartService } from '../api/cart.service';
import Swal from 'sweetalert2';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faMinus} from '@fortawesome/free-solid-svg-icons';
import { last } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public FoodItem:any;
  public grandtotal:number=0;
  icon=faTrash;
  Plus=faPlus
  Mins=faMinus
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getProduct().subscribe(foods=>{
      this.FoodItem=foods;
      console.log(this.FoodItem);
      this.grandtotal = this.cart.getTotalPrice();
    })
  }

  emptyCart(){
    this.cart.removeallcart();
  }

  deleteItem(data:any){
    this.cart.removecartItem(data)
  }

  checkOut(){
    Swal.fire("Thank You.....",'Your Order Sucessfully Placed!','success');
  }

plus(data:any){
data.quantity++
const vaule= data.quantity
console.log(vaule);
}

drop(data:any){
  if(data.quantity>1){
    data.quantity--
  }
  console.log(data.quantity)
}
}
