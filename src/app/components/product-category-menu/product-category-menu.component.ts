import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../common/product-category';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrl: './product-category-menu.component.css',
})
export class ProductCategoryMenuComponent implements OnInit {
  productCategory: ProductCategory[] = [];

  constructor(private productServise: ProductService) {}

  ngOnInit(): void {
    this.listAllCategories();
  }

  listAllCategories() {
    this.productServise.getAllCategories().subscribe((data) => {
      console.log('Product Categories: ' + JSON.stringify(data));
      this.productCategory = data;
    });
  }
}
