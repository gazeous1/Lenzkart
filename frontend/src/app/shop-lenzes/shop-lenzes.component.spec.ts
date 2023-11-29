import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopLenzesComponent } from './shop-lenzes.component';

describe('ShopLenzesComponent', () => {
  let component: ShopLenzesComponent;
  let fixture: ComponentFixture<ShopLenzesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopLenzesComponent]
    });
    fixture = TestBed.createComponent(ShopLenzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
