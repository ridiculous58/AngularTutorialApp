import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private productService: ProductService, private toastrService: ToastrService) {

  }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      productName: ["", Validators.required], //Boş string olan yer değişkenin ilk değeri biz boş string verdik
      unitPrice: ["", Validators.required],
      unitsInStock: ["", Validators.required],
      categoryId: ["", Validators.required]
    });
  }

  add() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      this.productService.add(productModel).subscribe(response => {
        this.toastrService.success("Urun Eklendi", "Başarılı ! ");
      },responseError =>{
        for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası");
          
        }

       
      })
    } else {
      this.toastrService.error("Formunuz Eksik", "Dikkat !")
    }
  }
}


//Reactive formlarla calısıcagız onun aktive olabilmesi için bizim önce projemizde formsmodule olması gerekiyor
// app module reactiveFromsModule a eklememiz lazım

//Reactive formlarla çalışabilmemiz için bir kaç importa ihtiyacımız var bunlar {FormGroup,FormControl,Validators}  dir


// Forms BUilder inşa edici html forms inşa ediyo diyebiliriz