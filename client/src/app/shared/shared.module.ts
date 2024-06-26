import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';


@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
  ],
  exports: [
    NgxPaginationModule,
    PagingHeaderComponent,
    PagerComponent,
  ]
})
export class SharedModule { }
