import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() searchText;
  data = [];

  constructor() { }

  ngOnInit() {
    let weekday = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
     "Суббота"
    ],
    month = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь'
    ];


    for (let i = 0; i < new Date().getDate(); i++) {
      this.data[i] = {};
      this.data[i].day = i + 1;
      this.data[i].month = month[new Date().getMonth()];
      this.data[i].weekday = weekday[new Date(Date.parse(`${new Date().getMonth() + 1}.${i + 1}.${new Date().getFullYear()}`)).getDay()];
    }
  }


}
