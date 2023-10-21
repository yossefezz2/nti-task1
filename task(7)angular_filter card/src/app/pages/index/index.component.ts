import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  inputType: string ="password";
  buttonName: string ="show password";
  text: string =""
  model:any
  HandelerShowPassword(){
    this.inputType = this.inputType === "password"? "text" : "password";
    this.buttonName = this.buttonName === "show password"? "hide password" : "show password";
  }
  handelName(event: any){
    this.text=event.target.value
  }
}
