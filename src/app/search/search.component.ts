import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchText = '';

  searchCards(searchText) {
    let cards = document.querySelectorAll('.card-list > li');
    
    cards.forEach((item) => {
      (item as HTMLElement).style.display = "block";
      let itemInfo = item.querySelectorAll('.card-list__item-info');

      if (itemInfo[0].textContent.toLowerCase().indexOf(searchText.toLowerCase()) === -1 &&
      itemInfo[1].textContent.toLowerCase().indexOf(searchText.toLowerCase()) === -1 &&
      itemInfo[2].textContent.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
        (item as HTMLElement).style.display = "none";
      }
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
