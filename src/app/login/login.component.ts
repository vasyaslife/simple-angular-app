import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = sessionStorage.getItem('login') || '';
  pass = sessionStorage.getItem('password') || '';
  passVisible = false;
  loginError = false;
  passError = false;

  logIn() {
    if (this.checkValidation(this.login, this.pass)) {
      this.addSessionInfo(this.login, this.pass);

      this.routeToMain();
    }
  }

  checkValidation(login, pass) {
    let passRegEx = /^\d|[А-ЯЁ]/i;

    if (login.length <= 3) {
      this.loginError = true;
    }

    if (pass.length < 10 ||
      passRegEx.test(pass) ||
      pass.toLowerCase() == pass) {
        this.passError = true;
    }

    if (!this.loginError && !this.passError) {
      return true;
    }

    return false;
  }

  deleteErrorText() {
    if (this.loginError || this.passError) {
      this.loginError = false;
      this.passError = false;
    }
  }

  addSessionInfo(login, pass) {
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('password');

    sessionStorage.setItem('login', login);
    sessionStorage.setItem('password', pass);
  }

  routeToMain() {
    this.router.navigate(['/main']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('login'), sessionStorage.getItem('password')) {
      this.routeToMain();
    }
  }

}
