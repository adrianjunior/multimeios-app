import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage implements OnInit {

  searchEnabled: boolean = false;
  books: boolean[] = [false, false, false, false, false,
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
