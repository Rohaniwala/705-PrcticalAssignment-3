import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-display-prd',
  templateUrl: './display-prd.component.html',
  styleUrls: ['./display-prd.component.css']
})
export class DisplayPrdComponent implements OnInit {
  data: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8000/').subscribe((response: any) => {
      this.data = response;
    });
  }
}
