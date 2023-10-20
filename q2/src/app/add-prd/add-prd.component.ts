import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';
import { response } from 'express';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-prd',
  templateUrl: './add-prd.component.html',
  styleUrls: ['./add-prd.component.css']
})
export class AddPrdComponent implements OnInit {
  category: any[] = [];
  data: any[] = [];
  
   prdData={
    pname:'',
    cname:'',
    price:'',
    qtny:'',
    image:''
  };
  selectedFile: File | undefined;
  selectedFileName: string | undefined;
  onFileSelect(event: any): void {
    this.selectedFile = event.target.files[0];
    // Extract and store only the filename
    if (this.selectedFile) {
      // Remove the "C:\\fakepath\\" prefix to get only the filename
      this.selectedFileName = this.selectedFile.name;
    } else {
      this.selectedFileName = undefined;
    }
  }

  constructor(private http: HttpClient,private route: ActivatedRoute) { }
  
 
  ngOnInit() {
    this.http.get('http://localhost:8000/addPrd').subscribe((response: any) => {
      this.category = response;
      console.log(response)
    });
    this.http.get('http://localhost:8000/').subscribe((response: any) => {
      this.data = response;
  })
  }
  onSubmit()
  {
    this.prdData.image=this.selectedFile ? this.selectedFile.name : '';
    // console.log(this.selectedFileName)
    this.http.post('http://localhost:8000/insert',this.prdData).subscribe((response)=>{
      alert("Added")
    })
    console.log(this.prdData)
  }
  OnDelete()
  {
    this.route.params.subscribe(params => {
      var id = params['id']; // 'id' should match the parameter name in your route definition
      // Now you can use this.id as needed in your component
      console.log(id)
    this.http.get(`http://localhost:8000/delete/${id}`).subscribe((response: any) => {
      // console.log("deleted")
      alert("delted")
  })
})
  }
}
