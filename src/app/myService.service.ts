import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  language:number=1;
  authenticUser:boolean=false;
  result:any;
  bloggerId:number;
  bloggerName:string;
  
  constructor(private _http: Http) { }
  
  loginBlogger(data){
      return this._http.post("http://localhost:8080/cms/login.php", data).pipe(
        map((res:Response) => {
          return res.json();
        }));
  }
  
  setBlogger(blogerId:number,bloggerName:string){
    this.bloggerId=blogerId;
    this.bloggerName=bloggerName;
    this.authenticUser = true;
  }

  resetBlogger(){
    this.bloggerId=0;
    this.bloggerName="";
    this.authenticUser = false;
  }

  getCurretnBlog(data){
    return this._http.post("http://localhost:8080/cms/getBlogById.php", data).pipe(
      map((res:Response) => {
        return res.json();
      }));
  }

  getAllPosts(){
    return this._http.get("http://localhost:8080/cms/getAllPosts.php", null)
    .pipe(
      map((res:Response) => {
        return res.json();
      }));
  }

  setLanguage(language:number){
    this.language=language;
  }

  Update(data) {
    return this._http.post('http://localhost:8080/cms/updatePost.php', data).pipe(
      map((res: Response) => {
        console.log("Blog Updated Response: " + res);
        return res;
      }));
  }

  createBlog(data) {
    return this._http.post('http://localhost:8080/cms/createBlog.php', data).pipe(
      map((res: Response) => {
        console.log("New Blog Creation Response: " + res);
        return res;
      }));
  }

  registerBlogger(data){
    return this._http.post("http://localhost:8080/cms/register.php", data).pipe(
      map((res:Response)=>{
        return res;
    }));
  }
}