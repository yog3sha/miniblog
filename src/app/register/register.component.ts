import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyServiceService } from '../myService.service';
import { Cookie } from 'ng2-cookies'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fname:string; lname:string; contact:number=null; eMail:string; pwd:string;
  result:any;

  constructor(private _ser: MyServiceService, private _r: Router) { }

  ngOnInit() {
  }

  onSubmit(data:NgForm){
    this._ser.registerBlogger(data).subscribe(
      (res) => {
      if (res[2] != "false") {
        Cookie.set("userName", res['fName']);
        // this._ser.authenticUser = true;
        this._r.navigate(['./']);
      }else{
        this.result=res;
        alert("Cannot create user with these details!");
      }
    });
  }
}