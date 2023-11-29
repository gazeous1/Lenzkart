import { Component, ViewEncapsulation } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None // Try changing this
})
export class IndexComponent {

  isMobile: boolean = false;

  toggleMobileMenu() {
    this.isMobile = !this.isMobile;

}
}