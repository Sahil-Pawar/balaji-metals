import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.scss']
})
export class ProductsComponent implements OnInit {

 constructor(
  private http: HttpClient,
  private route: ActivatedRoute
) {}

  products: any[] = [];
  categoryId: string = '';
filteredProducts: any[] = [];

  selectedProduct: any;
  selectedImage: string = '';
  selectedVariant = '';

  ngOnInit(): void {

  // 🔹 Get category from URL
  this.categoryId = this.route.snapshot.paramMap.get('category') || '';

  // 🔹 Load products
  this.http.get<any[]>('assets/data/products.json')
    .subscribe(data => {

      this.products = data;

      // ✅ FIX: handle BOTH cases
      if (this.categoryId) {
        // 👉 category page (from home click)
        this.filteredProducts = this.products.filter(
          p => p.category === this.categoryId
        );
      } else {
        // 👉 products menu (show ALL)
        this.filteredProducts = this.products;
      }

      // 🔹 Set first product
      if (this.filteredProducts.length > 0) {
        this.selectedProduct = this.filteredProducts[0];
        this.selectedImage = this.selectedProduct.images[0];
      }
    });
}

  // 🔹 Change main image
  changeImage(img: string) {
    this.selectedImage = img;
  }

  // 🔹 Select variant
  selectVariant(variant: string) {
    this.selectedVariant = variant;
  }

  // 🔹 Change product
  selectProduct(product: any) {
    this.selectedProduct = product;
    this.selectedImage = product.images[0];
    this.selectedVariant = '';

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}