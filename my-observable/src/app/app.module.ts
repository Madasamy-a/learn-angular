import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { routing, childRouting } from './app.routes';
import { AppComponent } from './app.component';
import { EmployeeService} from '../services/employee.service';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    childRouting
  ],
  exports: [
    RouterModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})

export class AppModule { }
