import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.scss']
})
export class ProductsComponent implements OnInit {

  products = [
    {
      name: 'Vinod Saucepan & Tope Set (Induction Friendly)',
      images: ['assets/products/product1_1.webp', 'assets/products/product1_2.webp', 'assets/products/product1_3.webp'],
      sold: 5,
      timeframe: '15 hours',
      vendor: 'Vinod Cookware India Pvt. Ltd.',
      sku: '711909',
      availability: '9 in stock',
      type: 'Cookware Set',
      description: 'Premium stainless steel cookware with SAS bottom for even heat distribution.',
      oldPrice: 880,
      price: 704,
      variants: ['Saucepan - 0.8L', 'Tope - 1.4L']
    },
    {
      name: 'Hawkins Non-stick Fry Pan (20 cm)',
      images: ['assets/products/product2_1.jpg', 'assets/products/product2_2.jpg'],
      sold: 8,
      timeframe: '10 hours',
      vendor: 'Hawkins India Pvt. Ltd.',
      sku: '812345',
      availability: '6 in stock',
      type: 'Fry Pan',
      description: 'Durable non-stick surface with cool touch handle and glass lid.',
      oldPrice: 950,
      price: 799,
      variants: ['20 cm', '24 cm']
    },
    {
      name: 'Prestige Pressure Cooker 3L',
      images: ['assets/products/product3_1.jpg', 'assets/products/product3_2.jpg'],
      sold: 12,
      timeframe: '6 hours',
      vendor: 'TTK Prestige Ltd.',
      sku: '900111',
      availability: '5 in stock',
      type: 'Pressure Cooker',
      description: 'Safe, durable and energy efficient cooker with ergonomic handles.',
      oldPrice: 1500,
      price: 1280,
      variants: ['3L', '5L']
    }
  ];

  selectedProduct = this.products[0];
  selectedImage = this.products[0].images[0];
  selectedVariant = '';

  ngOnInit(): void {}

  changeImage(img: string) {
    this.selectedImage = img;
  }

  selectVariant(variant: string) {
    this.selectedVariant = variant;
  }

  selectProduct(product: any) {
    this.selectedProduct = product;
    this.selectedImage = product.images[0];
    this.selectedVariant = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
