import { Component, OnInit, OnChanges } from '@angular/core';
import { MyServiceService } from '../myService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {
  allPosts:any;
  ids=[];
  names=[];
  currentLang:number;
  myheader=[];
  mycontent=[];
  valid:boolean;
  isAuther:boolean[]=[];
  currentBloggerId:number=0;

  constructor(private _ser: MyServiceService, private router: Router) {}

  ngOnInit() {
    this.valid=this._ser.authenticUser;
    this.currentLang=this._ser.language;
    this._ser.getAllPosts().subscribe(data => {
      this.allPosts= data;
      this.currentBloggerId = this._ser.bloggerId;

      for(let i=0; i<data.length; i++){
        
        if(parseInt((JSON.parse(data[i]).bloggerId).trim()) == this.currentBloggerId){
          this.isAuther[i]=true;
        }
        else{
          this.isAuther[i]=false;
        }
        
        this.ids.push(JSON.parse(data[i]).ID);
        this.names.push(JSON.parse(data[i]).userName);

        switch(this.currentLang){
          case 1: 
            this.myheader.push(JSON.parse(data[i]).header);
            this.mycontent.push(JSON.parse(data[i]).content);
            break;
          case 2:
            this.myheader.push(JSON.parse(data[i]).hindiHeader);
            this.mycontent.push(JSON.parse(data[i]).hindiContent);
            break;
          case 3:
            this.myheader.push(JSON.parse(data[i]).germanHeader);
            this.mycontent.push(JSON.parse(data[i]).germanContent);
            break;
        }
      }
    });
  }

  ngOnChanges(){
    this.valid=this._ser.authenticUser;
    this.currentBloggerId = this._ser.bloggerId;
  }

  onEdit(bloggerId:number,blogId:number=0){
    this.router.navigate([ '/Edit', bloggerId, blogId ]);
  }
}