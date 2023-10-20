import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPrdComponent } from './add-prd/add-prd.component';
import { DisplayPrdComponent } from './display-prd/display-prd.component';
import { EditPrdComponent } from './edit-prd/edit-prd.component';

const routes: Routes = [
  {path:"addPrd",component:AddPrdComponent},
  {path:"display",component:DisplayPrdComponent},
  {path:"edit/:id",component:EditPrdComponent},
  {path:"delete/:id",component:AddPrdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
