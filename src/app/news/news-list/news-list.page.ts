import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.page.html',
  styleUrls: ['./news-list.page.scss'],
})
export class NewsListPage implements OnInit {

  searchEnabled: boolean = false;
  news: boolean[] = [false, false, false, false, false,
    false, false, false, false, false,
    false, false, false, false, false,
    false, false, false, false, false];
    
  constructor() { }

  ngOnInit() {
  }

  toggleSearch() {
    if (this.searchEnabled) {
      this.searchEnabled = false;
    } else {
      this.searchEnabled = true;
    }
  }

}
