import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyServiceService } from '../myService.service';
import { Cookie } from 'ng2-cookies'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  result: any;
  constructor(private _ser: MyServiceService, private _r: Router) { }

  ngOnInit() {
  }

  onSubmit(data: NgForm) {
    this._ser.loginBlogger(data).subscribe(
      (res) => {
      if(res[0]=="null") {
        this.result=res;
        console.log("Login Failed!");
        alert("Incorrect Id or Password!");
      }else{
        this._ser.setBlogger(JSON.parse(res[0]).bloggerId,JSON.parse(res[0]).FirstName)
        Cookie.set("blogger", res['bloggerId']);
        this._r.navigate(['./Dashboard']);
      }
    });
  }
}