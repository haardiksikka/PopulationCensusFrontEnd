import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-approver-nav-bar',
  templateUrl: './approver-nav-bar.component.html',
  styleUrls: ['./approver-nav-bar.component.css']
})
export class ApproverNavBarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.route.navigate(['login'])
    console.log('logging out');
  }
}
