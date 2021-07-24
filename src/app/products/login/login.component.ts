import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup, FormControl}from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { LoginEmploye } from './login.employe';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  addNewlogin: any;
  message: any;
  Error: any;

  constructor(private productsservice:ProductsService,
    public serive:LoginService,
    private router:Router) { }

  ngOnInit(): void {

  }
loginForm =new FormGroup({
  EMAIL:new FormControl('',[Validators.required]),
  PASSWORD: new FormControl('',[Validators.required])
})
checkout(loginForm:any){
  console.log(loginForm);
  var res= this.serive.validateUser(this.loginForm.value["EMAIL"],this.loginForm.value["PASSWORD"]);
if(res){
  localStorage.setItem("username",this.loginForm.value["EMAIL"]);
  localStorage.setItem("password",this.loginForm.value["PASSWORD"]);
  console.log("sucess");
this.router.navigate(["products/view-product"]);
}else{
console.log("failed");

alert("Invalid User..");
}
}

  }


