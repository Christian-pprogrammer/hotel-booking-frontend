import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private auth: AuthService) {}

  isLoggedIn: boolean = this.auth.isLoggedIn();
  isAdmin:boolean = this.auth.isAdmin();
  ngOnInit(): void {
    this.auth.currentUserSubject.subscribe((data) => {
      this.isLoggedIn = data.loggedIn;
      this.isAdmin = data.user.isAdmin
    });
  }

  logout() {
    this.auth.logout();
  }
}
