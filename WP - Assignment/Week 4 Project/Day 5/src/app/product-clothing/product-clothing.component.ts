import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '../credentials.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-clothing',
  templateUrl: './product-clothing.component.html',
  styleUrls: ['./product-clothing.component.css']
})
export class ProductClothingComponent implements OnInit {
  productList:any;
  category: String;
  constructor(private service: CredentialsService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(data=>{
      console.log(data.category);
      this.category = data.category;
      console.log("my cat"+this.category);
      
      if(data.category == "Beauty") {
        this.service.getBeautyproducts().subscribe((data)=>{
          console.log(data);
          this.productList = data;
          // console.log(this.productList.beauty.eyes.brand);
        })
      }
      if(data.category == "Clothing") {
        this.service.getClothingproducts().subscribe((data)=>{
          console.log(data);
          this.productList = data;
          // console.log(this.productList.beauty.eyes.brand);
        })
      }

      if(data.category == "Footwear") {
        this.service.getFootwearproducts().subscribe((data)=>{
          console.log(data);
          this.productList = data;
          // console.log(this.productList.beauty.eyes.brand);
        })
      }
    });
  }
  


}
