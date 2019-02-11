import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CredentialsService } from './credentials.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ContactComponent } from './contact/contact.component';
import { ProductClothingComponent } from './product-clothing/product-clothing.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';


// const routes: Routes = [
//   { path: '', component: MainpageComponent },
//   { path: 'Home', component: MainpageComponent},
//   { path: 'Login', component: LoginComponent },
//   { path: 'Register', component: RegisterComponent },
//   { path: 'Contact', component: ContactComponent},
//   { path: 'Product', component: ProductClothingComponent},
//   { path: 'ProductView', component: ProductViewComponent}
  
// ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainpageComponent,
    ContactComponent,
    ProductClothingComponent,
    ProductViewComponent,
    CartComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [CredentialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
