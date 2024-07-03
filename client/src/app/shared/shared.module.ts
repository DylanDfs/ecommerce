import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    NgbCarouselModule,
  ],
  exports: [
    NgxPaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    NgbCarouselModule
  ]
})
export class SharedModule { }
