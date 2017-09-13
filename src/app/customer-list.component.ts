import { Component } from '@angular/core';
import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'customer-list', // selector name <my-app> in index.html it puts template html
  styleUrls: ['customer-list.component.css'],
  templateUrl: 'customer-list.component.html',
})
// we need to export it so it can be imported
export class CustomerListComponent  {
  customers: Customer[] = [
    {
      id: 1,
      name: 'Alex Smith',
      address: {
        street: '123 Main Street',
        city: 'Anytown',
        state: 'California',
        region: 'West'
      }
    },
    {
      id: 2,
      name: 'Pierre Pasmal',
      address: {
        street: '456 Rue de Main',
        city: 'Quebec City',
        state: 'Quebec',
        region: 'East'
      }
    },
    {
      id: 3,
      name: 'Margarita Nadie',
      address: {
        street: '789 Calle Principal',
        city: 'Guadalajara',
        state: 'Jalisco',
        region: 'South'
      }
    },
    {
      id: 4,
      name: 'Katie O\'Leary',
      address: {
        street: '137 DeKoven Street',
        city: 'Chicago',
        state: 'Illinois',
        region: 'Midwest'
      }
    }];

    customer: Customer;

    shift(increment: number) {
      console.log('in shift - list component');
      let inc = this.customers.findIndex(c => c === this.customer) + increment;
      // if we're at 0 and going left , don't go less than -1
      inc = Math.min(this.customers.length - 1, Math.max(0, inc));
      this.customer = this.customers[inc];
    }
}


