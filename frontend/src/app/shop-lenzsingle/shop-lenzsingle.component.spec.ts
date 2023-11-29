import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopLenzsingleComponent } from './shop-lenzsingle.component';

describe('ShopLenzsingleComponent', () => {
  let component: ShopLenzsingleComponent;
  let fixture: ComponentFixture<ShopLenzsingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopLenzsingleComponent]
    });
    fixture = TestBed.createComponent(ShopLenzsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
