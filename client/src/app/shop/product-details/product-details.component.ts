import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BasketService } from '../../basket/basket.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  product!: IProduct;
  quantity = 1;

  constructor(private shopService: ShopService,
              private activatedRoute: ActivatedRoute,
              private bcService: BreadcrumbService,
              private basketService: BasketService
              ) {
    this.bcService.set('@ProductDetails', '');
  }
  
  ngOnInit(): void {
    this.loadProduct();
  }

  addItemToBasket(){
    this.basketService.addItemToBasket(this.product, this.quantity);
  }

  incrementQuantity(){
    this.quantity++;
  }

  decrementQuantity(){
    if (this.quantity > 1){
      this.quantity--;
    }
  }

  loadProduct(){
    this.shopService.getProduct(+this.activatedRoute.snapshot.paramMap.get('id')!)
      .subscribe({
        next: product => {
          this.product = product,
          this.bcService.set('@productDetails', product.name)
        },
        error: error => console.log(error), 
      });
  }
}
