import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPrdComponent } from './add-prd/add-prd.component';
import { FormsModule } from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import { DisplayPrdComponent } from './display-prd/display-prd.component';
import { EditPrdComponent } from './edit-prd/edit-prd.component'

@NgModule({
  declarations: [
    AppComponent,
    AddPrdComponent,
    DisplayPrdComponent,
    EditPrdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
