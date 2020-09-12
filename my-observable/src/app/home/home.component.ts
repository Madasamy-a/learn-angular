import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

    constructor(private router: Router) {

    }

    navigate(navitem : string )
    {
        this.router.navigate([navitem]);
    }

    ngOnInit(){

    }

    ngOnDestroy() {
        console.log('Home Component destroyed');
    }
}