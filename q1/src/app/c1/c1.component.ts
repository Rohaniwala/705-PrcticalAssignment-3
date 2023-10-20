import { Component } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component {
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
