import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from "../reviews/reviews";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReviewsComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {

  banners = [
    { image: 'assets/images/banner1.jpg', alt: 'Festive Offers' },
    { image: 'assets/images/banner2.png', alt: 'New Arrivals' },
    { image: 'assets/images/banner3.webp', alt: 'Exclusive Discounts' }
  ];

  currentBanner = 0;
  interval: any;

  categories = [
    { name: 'Copper Cookware', price: 1299, image: 'assets/images/copper.jpeg' },
    { name: 'Stainless Steel', price: 899, image: 'assets/images/steel.jpg' },
    { name: 'Tri-Ply Cookware', price: 1599, image: 'assets/images/triply.jpg' },
    { name: 'Non-Stick', price: 999, image: 'assets/images/nonstick.jpg' },
    { name: 'Brass Utensils', price: 1399, image: 'assets/images/brass.jpg' },
    { name: 'Kitchen Accessories', price: 499, image: 'assets/images/accessories.jpg' },
  ];

  ngOnInit() {
    this.startBannerRotation();
  }

  startBannerRotation() {
    this.interval = setInterval(() => {
      this.currentBanner = (this.currentBanner + 1) % this.banners.length;
    }, 3000); // change every 3 seconds
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
