import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { MyServiceService } from '../myService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {
  menu1=["Dashboard","Contact","About"];
  menu2=["डैशबोर्ड","संपर्क","बारे में"];
  menu3=["Instrumententafel","Kontakt","Über"];
  menus=this.menu1;
  logmenu1=["Login","Register"];  logmenu2=["लॉग इन","रजिस्टर"];  logmenu3=["Anmeldung","Registrieren"];
  logmenus=this.logmenu1;
  logmenu4=["Logout","लोग आउट","Ausloggen"];
  logoutmenu=this.logmenu4[0];
  valid:boolean;
  bloggerName: string;
  Language = "English";

  constructor(private ser:MyServiceService) { }

  ngOnInit() {
    this.valid=this.ser.authenticUser;
  }

  ngDoCheck(){
    this.valid=this.ser.authenticUser;
    if(this.valid){
      this.bloggerName=this.ser.bloggerName;
    }
  }

  trans(lang:number){
    this.ser.setLanguage(lang);
    switch(lang){
      case 1:
        this.menus= this.menu1; this.Language = "English";
        this.logmenus=this.logmenu1;
        this.logoutmenu=this.logmenu4[0];
        break;
      case 2:
        this.menus= this.menu2; this.Language = "हिन्दी";
        this.logmenus=this.logmenu2;
        this.logoutmenu=this.logmenu4[1];
        break;
      case 3:
        this.menus= this.menu3; this.Language = "Deutschland";
        this.logmenus=this.logmenu3;
        this.logoutmenu=this.logmenu4[2];
        break;
    }
  }

  onLogout(){
    this.ser.resetBlogger();
  }
}