import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CompareComponent } from './compare/compare.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ShopGridComponent } from './shop-grid/shop-grid.component';
import { ShopLenzesComponent } from './shop-lenzes/shop-lenzes.component';
import { ShopLenzsingleComponent } from './shop-lenzsingle/shop-lenzsingle.component';

import { SingleProductComponent } from './single-product/single-product.component';
import { WishlistComponent } from './wishlist/wishlist.component';


export const routes: Routes = [

    {path: '',component:IndexComponent},
    {path: 'signup', component:LoginRegisterComponent},
    {path: 'login', component:LoginRegisterComponent},
    {path: 'about', component:AboutComponent},
    {path: 'cart', component:CartComponent},
    {path: 'checkout', component:CheckoutComponent},
    {path: 'compare', component:CompareComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'index', component:IndexComponent},
    {path: 'myaccount', component:MyAccountComponent},
    {path: 'shop', component:ShopGridComponent},
    {path: 'shopgrid', component:ShopGridComponent},
    {path: 'shoplenzes', component:ShopLenzesComponent},
    {path: 'shoplenzsingle', component:ShopLenzsingleComponent},
    {path: 'singleproduct', component:SingleProductComponent},
    {path: 'wishlist', component:WishlistComponent}
    
];

