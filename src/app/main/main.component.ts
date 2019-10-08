import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  login = sessionStorage.getItem('login') || '';

  logOut() {
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('password');
    this.router.navigate(['']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
