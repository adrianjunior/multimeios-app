import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'news-profile', loadChildren: './news/news-profile/news-profile.module#NewsProfilePageModule' },
  { path: 'book-profile', loadChildren: './books/book-profile/book-profile.module#BookProfilePageModule' },
  { path: 'reservation-list', loadChildren: './reservations/reservation-list/reservation-list.module#ReservationListPageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
