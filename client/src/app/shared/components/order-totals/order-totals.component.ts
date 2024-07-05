import { Component, OnInit } from '@angular/core';
import { IBasketTotals } from '../../models/basket';
import { Observable } from 'rxjs';
import { BasketService } from '../../../basket/basket.service';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrl: './order-totals.component.scss'
})
export class OrderTotalsComponent implements OnInit{
  basketTotal$! : Observable<IBasketTotals | null>;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basketTotal$ = this.basketService.basketTotal$;
  }
}
