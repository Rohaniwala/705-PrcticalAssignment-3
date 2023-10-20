import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'q1';
  n1: number=12345;
  s1:string="Hello";
  date1:Date=new Date(Date.now())
  array1:string[]=[".NET","Node"]

  array2:string[]=["textbox","textArea"]
  selection:string="textbox"
  textbox:string=""
  textArea:string=""
  onChange()
  {}
  
}
