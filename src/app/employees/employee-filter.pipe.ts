import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  	transform(value: any, args?: any) {
        // Added Lower case searching.
        if(args) {
          return value.filter(item => 
          	(item.id.toString().indexOf(args) !== -1) || (item.id.toString().toLowerCase().indexOf(args) !== -1) || 
              (item.name.toString().indexOf(args) !== -1) || (item.name.toString().toLowerCase().indexOf(args) !== -1) || 
          	(item.phone.toString().indexOf(args) !== -1) || (item.phone.toString().toLowerCase().indexOf(args) !== -1) || 
              (item.email.toString().indexOf(args) !== -1) || (item.email.toString().toLowerCase().indexOf(args) !== -1)
          );
        }
        return value;
    }

}
