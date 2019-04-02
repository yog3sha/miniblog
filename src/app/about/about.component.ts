import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../myService.service';
import { serializePath } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  About:string;
  engAbout:string="This CMS is made for managing blogs. The blogs are created by some specific bloggers and are available to all visiters of this site to read. Only the authorized bloggers are allowed to change their own blogs!";
  hinAbout:string="यह सीएमएस ब्लॉग प्रबंधित करने के लिए बनाया गया है। ब्लॉग कुछ विशिष्ट ब्लॉगर्स द्वारा बनाए जाते हैं और इस साइट के सभी आगंतुकों को पढ़ने के लिए उपलब्ध हैं। केवल अधिकृत ब्लॉगर्स को अपने ब्लॉग बदलने की अनुमति है!";
  gerAbout:string="Dieses CMS ist für die Verwaltung von Blogs gedacht. Die Blogs werden von bestimmten Bloggern erstellt und stehen allen Besuchern dieser Website zum Lesen zur Verfügung. Nur autorisierte Blogger dürfen ihre eigenen Blogs ändern!";
  constructor(private ser:MyServiceService) { }

  ngOnInit() {
    this.About = this.engAbout;
  }

  ngDoCheck(){
    if(this.ser.language==1){
      this.About = this.engAbout;
    }
    else if(this.ser.language==2){
      this.About = this.hinAbout;
    }
    else if(this.ser.language==3){
      this.About = this.gerAbout;
    }
  }

}
