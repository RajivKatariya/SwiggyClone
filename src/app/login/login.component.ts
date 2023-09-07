import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj:any ={
   userName:'',
   email:'',
   password:''
  };
  loginObj:any={
    email:'',
    userName:'',
    paasword:''
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
    const localData= localStorage.getItem('signUpUsers');
    if(localData != null){
      this.signupUsers = JSON.parse(localData);
    }
  }
  onLogin(){
        //  console.log("signupUsers",this.signupUsers);
    //  console.log(this.loginObj.password);
    const isUserExist= this.signupUsers.find(m=>m.email == this.loginObj.email && m.password == this.loginObj.password);
    //  console.log("signupUsers",this.loginObj);
     console.log(this.loginObj.email);
     console.log(this.loginObj.password);
  
     if(isUserExist != undefined){
      alert("User Login Successfully!");
      this.router.navigateByUrl('/food')
    }
    else if(this.loginObj.email == null || this.loginObj.email ==""){
      alert("Null value");
    }
    else{
      alert("Wrong Data");
      this.router.navigateByUrl('/signup');
  
    }
  }

}
