// 3rd party- stuff that angular wrote
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Stuff written by us
import { AppComponent }  from './app.component';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';

// So this metadata describes the class that follows it
@NgModule({
  imports:      [ BrowserModule, FormsModule ], // what do I need for module
  declarations: [ AppComponent, CustomerListComponent, CustomerDetailComponent ],  // what components are in my app
  bootstrap:    [ AppComponent ] // where do I start?
})
export class AppModule { }
