import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from '../store/product.model';
import { PRODUCTS } from '../store/market';
import * as Cart from '../store/actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute,
    private store: Store<any>) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // console.log("___@@@ params =", params);
      this.product = PRODUCTS.find((item) => {
        return item.id === +params.id
      })
    });
  }

  add() :void {
    this.store.dispatch(new Cart.AddProduct(this.product))
  }

}
