import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Product[] = [];
  errorMessage ?: string;
  constructor(private productService: ProductService) { }

  async ngOnInit() {
    try {
      this.products = await this.productService.getProducts();
      console.log(this.products);

      if(this.products.length === 0) {
        this.errorMessage = "Nincsenek alkatrészek az adatbázisban!"
      }
    } catch(err) {
      console.log(err);
      this.errorMessage = (err as HttpErrorResponse).error;
    }
  }

  deleteProduct(id: number) {
    console.log("DELETE:",id);
  }
}
