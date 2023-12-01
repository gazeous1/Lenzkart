import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  constructor(private router: Router) {}

  addToCart(cartUrl: string): void {
    this.router.navigateByUrl(cartUrl);
  }
}
