import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { BookListPageModule } from '../books/book-list/book-list.module';
import { NewsListPageModule } from '../news/news-list/news-list.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    RouterModule,
    BookListPageModule,
    NewsListPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
