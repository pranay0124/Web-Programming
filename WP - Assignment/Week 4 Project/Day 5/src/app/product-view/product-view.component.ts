import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '../credentials.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  
  productDetails:any;
  user_name :any;
  user_comment: any;
  pid : any;
  constructor(private service: CredentialsService, private router: Router, private route: ActivatedRoute) { 
    
  }

  cmt() {
    this.service.savecomment(this.pid, this.user_name, this.user_comment).subscribe((data) => {
       this.user_comment = "";
    });
    window.location.reload();
  }

  ngOnInit() {
    this.route.params.subscribe(data=>{
      console.log(data.category);

      if(data.category == "Clothing") {
        this.service.getClothingProduct(data.id).subscribe((data)=>{
          this.productDetails = data;
          console.log(data);
          this.pid = this.productDetails.id;
        })
      }
      if(data.category == "Beauty") {
        this.service.getBeautyProduct(data.id).subscribe((data)=>{
          this.productDetails = data;
          console.log(data);
        })
      }
      if(data.category == "Footwear") {
        this.service.getFootwearProduct(data.id).subscribe((data)=>{
          this.productDetails = data;
          console.log(data);
        })
      }
    });
  }

  addToCart(id) {
      this.service.addtocart(id).subscribe((data) => {
        if(data) {
          alert("Product added to cart successfully");
        } else {
          alert("You are a guest!!! Please Log In");
        }
      });
    }
}
