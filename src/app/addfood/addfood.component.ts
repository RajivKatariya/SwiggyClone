import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../food/food-service.service';
import { Router } from '@angular/router';
import { foods } from '../food';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit {
  foodTitle:string='';
  image:string='';
  address:string='';
  discount:string='';
  price:string='';
  constructor(private foodservice:FoodServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    if(this.foodTitle && this.image){
      const newFood:foods={
        id: Math.round(Math.random() * 1000),
        title: this.foodTitle,
        image: this.image,
        address: this.address,
        rating: 0,
        time: '',
        offer: '',
        discount:this.discount,
        price: this.price,
        coupon: ''
        
      }
      this.foodservice.addFood(newFood).subscribe((item)=>this.router.navigate(['/food']));
    }
  }

}
