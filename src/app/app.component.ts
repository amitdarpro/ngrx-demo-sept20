import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NGRX Demo';
  cart: Array<any>;

  constructor(private store: Store) {}

  ngOnInit() {
    // this.store.select('cart').subscribe(state => this.cart = state);

    console.log("\n\n app.component.ts >> ngOnInit() :: cart=", this.cart);
    
  }
}
