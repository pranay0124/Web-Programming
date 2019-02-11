import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  uri = 'http://localhost:4000';
  user:any = "";
  constructor(private http: HttpClient) { }

  addUser(firstname,number,email,password,address) {
    this.user = {
      firstname : firstname,
      number: number,
      email: email,
      password: password,
      address: [address],
      cart: [],
      wallet: 0
    };
    if(address == "" ) {
      this.user = {
        firstname : firstname,
        number: number,
        email: email,
        password: password,
        address: [],
        cart: [],
        wallet: 0
      }
    }
    return this.http.post(`${this.uri}/user/add`, this.user);
  }

  login(email, password) {
    console.log("service me aagaya");
    var loginuser = {
        email : email,
        password : password
      };
      return this.http.post(`${this.uri}/user/login`, loginuser);
  }

  // methods for categories
  getClothingproducts(){
    return this.http.get(`${this.uri}/getClothingProducts`);
  }

  getBeautyproducts(){
    return this.http.get(`${this.uri}/getBeautyProducts`);
  }

  getFootwearproducts(){
    return this.http.get(`${this.uri}/getFootwearProducts`);
  }

  // methods for products
  getClothingProduct(id) {
    var data ={
      id: id
    }
    return this.http.post(`${this.uri}/getClothingProduct`, data);
  }

  getBeautyProduct(id) {
    var data ={
      id: id
    }
    return this.http.post(`${this.uri}/getBeautyProduct`,id);
  }
  getFootwearProduct(id) {
    var data ={
      id: id
    }
    return this.http.post(`${this.uri}/getFootwearProduct`,id);
  }
 
  savecomment(id,user_name,user_comment) {
    var commentarray = {
      id : id,
      user_name : user_name,
      user_comment : user_comment
    }
    return this.http.post(`${this.uri}/product/comment`, commentarray);
  }
  
  addtocart(prodid : any) {
    var usercatprods = {
      // userid : userid,
      prodid : prodid
    }
    return this.http.post(`${this.uri}/user/addcart`, usercatprods);
  }

}
