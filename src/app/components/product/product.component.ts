import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/product';

//axios,fetch
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  dataLoaded = false;
  filterText = "";

  productResponseModel: ListResponseModel<Product> = {
    data: this.products,
    message: "",
    success: true
  };

  constructor(private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"]);
      }else{
        this.getProducts();
      }
    })
  }

  getProducts() {
    this.productService.getProducts().subscribe((response)=>{
      this.products = response.data;
      this.dataLoaded = true;
    });
  }
  getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe((response)=>{
      this.products = response.data;
      this.dataLoaded = true;
    })
  }
  addToCart(product:Product){
    this.toastrService.success("Sepete Eklendi !",product.productName)
    this.cartService.addToCart(product);
  }
}

//activated route build-in bir pakettir aktifleştirilmiş route mevcut route yani