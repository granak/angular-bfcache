import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'secured',
  templateUrl: './secured.component.html',
  styleUrls: ['./secured.component.css'],
})
export class SecuredComponent {
  constructor(private router: Router) {}
  logout() {
    sessionStorage.removeItem('logged');
    this.router.navigate(['/']);
  }
}
