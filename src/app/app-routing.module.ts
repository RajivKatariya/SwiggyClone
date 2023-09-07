import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooddisplayComponent } from './fooddisplay/fooddisplay.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { AddfoodComponent } from './addfood/addfood.component';

const routes: Routes = [
  {path:"",component:SignupComponent},
  {path:"food",component:FooddisplayComponent},
  {path:"signUp",component:SignupComponent},
  {path:"Login",component:LoginComponent},
  {path:"Cart",component:CartComponent},
  {path:"AddFood",component:AddfoodComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
