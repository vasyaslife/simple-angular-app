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

  logIn() {
    if (this.checkValidation(this.login, this.pass)) {
      this.addSessionInfo(this.login, this.pass);

      this.routeToMain();
    } else {
      alert('Введены неправильные данные, пожалуйста введите логин длиннее трех символов. ' +
      'Пароль не должен быть короче 10 символов, не должен содержать кириллицу, начинаться с цифры ' +
      'и должен иметь не менее одной заглавной буквы');
    }
  }

  checkValidation(login, pass) {
    let passRegEx = /^\d|[А-ЯЁ]/i;

    if (login.length > 3 &&
      pass.length >= 10 &&
      !passRegEx.test(pass) &&
      pass.toLowerCase() !== pass) {
      return true;
    }

    return false;
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
    if (this.checkValidation(this.login, this.pass)) {
      this.routeToMain();
    }
  }

}
