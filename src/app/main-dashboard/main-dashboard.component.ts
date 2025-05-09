import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserStorageService } from '../storoge/user-storage.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [MatSlideToggleModule,MatToolbarModule,RouterLink,RouterOutlet,NgIf],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.css'
})
export class MainDashboardComponent {

  isCustomerLoggedIn: boolean = UserStorageService.isCustomerLoggedIn();
  isAdminLoggedIn: boolean = UserStorageService.isAdminLoggedIn();
  
  constructor(private router: Router) {}
  
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event.constructor.name === "NavigationEnd") {
        this.isCustomerLoggedIn = UserStorageService.isCustomerLoggedIn();
        this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
      }
    });
  }
  
  logout() {
    UserStorageService.signOut();

    this.isAdminLoggedIn = false;
    this.isCustomerLoggedIn = false;
    this.router.navigateByUrl("/")
  }
}
