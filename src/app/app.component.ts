import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `   <div>
                <h1> {{name}}</h1>
                 <employee-app> Details of employee here from Employee Component </employee-app>
                <div>  `,
})
export class AppComponent  { name = 'Employee Details'; }
