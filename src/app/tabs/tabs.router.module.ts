import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { NewsListPage } from '../news/news-list/news-list.page';
import { BookListPage } from '../books/book-list/book-list.page';
import { ReservationListPage } from '../reservations/reservation-list/reservation-list.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'news',
        outlet: 'news',
        component: NewsListPage
      },
      {
        path: 'books',
        outlet: 'books',
        component: BookListPage
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(news:news)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
