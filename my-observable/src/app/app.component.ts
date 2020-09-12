import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Observable Example';
  employees = new Array<Employee>();

  constructor( public empservice: EmployeeService){


    empservice.getEmployees().subscribe(response => {
      // this.employees = response.map(item => { 
      //   return new Employee (item.id, item.name, item.status)
      // });
    });

    // var observableInstance = Observable.create((observer:any) => {
    //   observer.next('Hey Guys');
    //   observer.next('How are you?');
    //   observer.complete();
    // });

    // observableInstance.subscribe(
    //   (x:any) => this.addItem(x), 
    //   (error:any) => this.addItem(error), 
    //   ()=>this.addItem('Completed')
    // );

  }

  // addItem(data: any)
  // {
  //   console.log(data);
  // }
}
