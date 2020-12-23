import { Component, OnInit } from '@angular/core';
import { Product } from '../store/product.model';
import { PRODUCTS } from '../store/market';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Array<Product> = PRODUCTS;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoProduct(product: Product): void {
    this.router.navigate(['product', product.id]);
  }

}
