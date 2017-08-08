import { Component } from '@angular/core';

@Component({

    selector: '<employee-app>',
    templateUrl : 'app/employee/employee.component.html'

})


export class EmployeeComponent {

    EmployeeName : string  = 'Gaurav';
    EmployeeAge : string = '28';
    EmployeeDept :string = 'Sales';
    EmployeeCity :string = 'Pune';
}
