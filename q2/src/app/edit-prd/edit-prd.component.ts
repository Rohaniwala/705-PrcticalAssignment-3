import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-prd',
  templateUrl: './edit-prd.component.html',
  styleUrls: ['./edit-prd.component.css']
})
export class EditPrdComponent {
  category: any[] = [];

  
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

  formdata:any={};
  select:string='';
  ngOnInit() {

    this.http.get('http://localhost:8000/addPrd').subscribe((response: any) => {
      this.category = response;
      console.log(response)
    });
    this.route.params.subscribe(params => {
      var id = params['id']; // 'id' should match the parameter name in your route definition
      // Now you can use this.id as needed in your component
      console.log(id)
      this.http.get(`http://localhost:8000/edit/${id}`).subscribe((response: any) => {
      this.formdata = response;
      this.select=this.formdata.Category
      // console.log(this.data)
  })
    });
    
  }
  onSubmit()
  {
    this.route.params.subscribe(params => {
      var id = params['id']; // 'id' should match the parameter name in your route definition
      // Now you can use this.id as needed in your component
      console.log(id)
    // this.data.image=this.selectedFile ? this.selectedFile.name : '';
    // console.log(this.selectedFileName)
    this.http.post(`http://localhost:8000/edit/${id}`,this.prdData).subscribe((response:any)=>{
      console.log(response)
    })
    // console.log(this.prdData)
  })
  }
}
