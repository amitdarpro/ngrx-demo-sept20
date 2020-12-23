import { Component, OnInit } from '@angular/core';
import { Product } from '../store/product.model';
import * as Cart from '../store/actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  // cart: Array<any>;
  // cartSummary: Array<any> = [];

  cart$: Observable<Array<Product>>;

  constructor(private store: Store<any>) {
    this.cart$ = this.store.select('cart');
  }

  ngOnInit(): void {
    // this.store.select('cart').subscribe(state => this.cart = state);
    /*
    this.store.select('cart').subscribe((state) => {
      this.cart = state;
      if ((this.cart || []).length) {
        let index;
        for (let i=0; i<this.cart.length; i++) {
          if ((this.cartSummary || []).length) {
            index = this.cartSummary.findIndex((item) => {
              return item.id === this.cart[i].id
            });
          }
          index > -1 ? this.cartSummary[index].quantity++ : this.cartSummary.push({...this.cart[i], quantity: 1});
        }
      }
    })
    */
  }

  remove(product): void {
    this.store.dispatch(new Cart.RemoveProduct(product));
  }

}
