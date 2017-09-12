import { Component, Input } from '@angular/core';
import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'customer-detail', // selector name <my-app> in index.html it puts template html
  templateUrl: 'customer-detail.component.html',
})
// we need to export it so it can be imported
export class CustomerDetailComponent  {
  regions = ['East', 'North', 'South', 'West', 'Midwest'];
  states = ['Quebec', 'Jalisco', 'California', 'Illinois'];
  hideAddress = false;
  showAddress = true;

  @Input() customer: Customer;// = this.customers[0];
}


