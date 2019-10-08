import { Component, OnInit } from '@angular/core';

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
    window.location.href = '/';
  }

  constructor() { }

  ngOnInit() {
  }

}
