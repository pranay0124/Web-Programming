import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ProductClothingComponent } from './product-clothing/product-clothing.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'Home', component: MainpageComponent},
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Contact', component: ContactComponent},
  { path: 'Product/:category', component: ProductClothingComponent},
  { path: 'Product/:category/:id', component: ProductViewComponent},
  { path: 'Cart', component: CartComponent},
  { path: 'Checkout', component: CheckoutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
