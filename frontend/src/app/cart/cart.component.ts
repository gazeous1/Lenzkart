import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private router: Router) {}

  checkout(checkoutUrl: string): void {
    // You can add additional logic here if needed
    // For example, you can use the Angular Router to navigate to the cart page
    this.router.navigateByUrl(checkoutUrl);
  }


}
