import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Input() customer: Customer;
  @Output() shift = new EventEmitter<number>(); // allows you to sends a message up to parent

  left() {
    console.log('left');
    this.shift.emit(-1);
  }
  right() {
    console.log('right');
    this.shift.emit(1);
  }
}


