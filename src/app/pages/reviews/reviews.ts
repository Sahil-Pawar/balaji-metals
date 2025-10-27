import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.html',
  styleUrls: ['./reviews.scss']
})
export class ReviewsComponent {
  reviews = [
    { name: 'Amit Sharma', rating: 5, comment: 'खूप चांगली सेवा दिले जाते. अवश्य भेट द्या.', image: 'assets/images/review1.png' },
    { name: 'Priya Patel', rating: 4.8, comment: 'Very professional team and on-time delivery.', image: 'assets/images/review2.png' },
    { name: 'Rahul Verma', rating: 4.9, comment: 'Great experience! Highly recommend Balaji Metals.', image: 'assets/images/review3.png' }
  ];

  isVisible = false;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const screenHeight = window.innerHeight;

    // Trigger when section is 1/4th visible
    if (rect.top < screenHeight * 0.75 && rect.bottom > 0) {
      this.isVisible = true;
    }
  }
}
