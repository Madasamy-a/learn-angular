import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Employee } from '../models/employee';


@Injectable({
    providedIn: 'root'
})
export class EmployeeService{

    constructor(private http: HttpClient){

    }

    public getEmployees() : Observable<Employee[]>{
        const url = 'http://localhost:3000/employees';
        return this.http.get<Employee[]>(url);
    }

}
