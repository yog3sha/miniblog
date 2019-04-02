import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyServiceService } from '../myService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { blog } from '../blog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: []
})
export class EditComponent implements OnInit {
  // result: any;
  bloggerId: number;
  bloggerName: string;
  blogId: number;
  header:string='';
  hindiHeader:string='';
  germanHeader:string='';
  content:string='';
  hindiContent:string='';
  germanContent:string='';
  operation:string='';
  
  constructor(private _ser: MyServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.bloggerId=this._ser.bloggerId;
    this.bloggerName=this._ser.bloggerName;
    if (this.route.snapshot.params['bloggerId'] && this._ser.authenticUser) {
      this.bloggerId= this.route.snapshot.params['bloggerId'];
      if (this.route.snapshot.params['blogId'] != 0) {
        //edit the blog
        this.operation="update";
        let data = {
          bloggerId: this.route.snapshot.params['bloggerId'],
          blogId: this.route.snapshot.params['blogId']
        }
        this._ser.getCurretnBlog(data).subscribe(
          (res) => {
            this.bloggerName = res.userName;
            this.header=res.header;
            this.bloggerId = (+res.bloggerId);
            this.blogId = (+res.ID);
            this.header=res.header;
            this.hindiHeader = res.hindiHeader;
            this.germanHeader = res.germanHeader;
            this.content = res.content;
            this.hindiContent = res.hindiContent;
            this.germanContent = res.germanContent;
            res.bloggerId = (+res.bloggerId);
          });
      }
      else {
        //Create new Blog
        this.operation ="create";
        console.log("Parameters are Not there.");
      }
    }
    else{
      //not valid to enter without bloggerId
      this.router.navigate(['/'])
    }
  }

  onSubmit(data:NgForm) {
    
    if(this.operation == "update"){
      this._ser.Update(data).subscribe();
      alert("Your blog has been Updated Successfully");
      this.router.navigate["/"];
    }
    else{
      this._ser.createBlog(data).subscribe(
        ()=>{
          alert("Your blog has been Created Successfully");
          this.router.navigate["/"];
        }
      );
    }
  }
}
