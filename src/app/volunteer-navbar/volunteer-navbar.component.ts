import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-volunteer-navbar',
  templateUrl: './volunteer-navbar.component.html',
  styleUrls: ['./volunteer-navbar.component.css']
})
export class VolunteerNavbarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.route.navigate(['login'])
    console.log('logging out');
  }
}
