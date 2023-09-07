import { Component, OnInit } from '@angular/core';
import {FoodServiceService} from 'src/app/food/food-service.service'
import { foods } from '../food';
import {Router} from '@angular/router'
import { CartService } from '../api/cart.service';

@Component({
  selector: 'app-fooddisplay',
  templateUrl: './fooddisplay.component.html',
  styleUrls: ['./fooddisplay.component.css']
})
export class FooddisplayComponent implements OnInit {
  foods:foods[]=[];
   public Food:any;
  constructor(private foodService:FoodServiceService,private router:Router,private cart:CartService) { }

  ngOnInit(): void {
    this.foodService.getData().subscribe(foods=>{
      this.Food=foods

      this.Food.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      });
      this.Food.forEach((b:any)=>{
        Object.assign(b,{quantity:1,total:b.price})
      })
    })
    // this.foodService.getData().subscribe((foods)=>this.foods=foods);
    // console.log(this.foods)
    // this.Food=this.foods
    // console.log(this.foods);
  }
  addtocart(data:any){
 this.cart.addTocart(data);
 console.log(data);
  }

}
