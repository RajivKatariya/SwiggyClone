import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj:any ={
   userName:'',
   email:'',
   password:''
  };

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.signupUsers.push(this.signupObj);
    console.log(this.signupUsers);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    this.signupObj={
      userName:'',
      email:'',
      password:''
    }
    // this.router.navigate(['/Login']);
  }

}
