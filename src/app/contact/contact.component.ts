import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { MyServiceService } from '../myService.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit, AfterContentChecked {
  Contact:string;
  
  engContact:string="Thank you for visiting our blog! If you have any query you can contact us on following links! Please come back to visit us again!";
  hinContact:string="हमारे ब्लॉग पर जाने के लिए धन्यवाद! अगर आपके पास कोई प्रश्न है तो आप निम्नलिखित लिंक पर हमसे संपर्क कर सकते हैं! कृपया हमें फिर से देखने के लिए वापस आएं!";
  gerContact:string="Vielen Dank für Ihren Besuch auf unserem Blog! Wenn Sie Fragen haben, können Sie uns unter folgenden Links kontaktieren! Bitte besuchen Sie uns wieder!";
  constructor(private ser:MyServiceService) { }

  ngOnInit() {
    this.Contact = this.engContact;
  }
  
  ngAfterContentChecked(){
    switch(this.ser.language){
      case 1:
        this.Contact = this.engContact;
        break;
      case 2:
        this.Contact = this.hinContact;
        break;
      case 3:
        this.Contact = this.gerContact;
        break;
    }
  }
}