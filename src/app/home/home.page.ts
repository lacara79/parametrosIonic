import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {
  }

  paramValue: any = "Alexandre";

  guardar() {
    localStorage.setItem("nome","Alexandre")
    this.router.navigateByUrl('/receba');    
  }
}
