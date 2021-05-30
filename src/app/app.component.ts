import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'northwind';
  user:string = "Engin Demiroğ";
  
}


//component html in datasını yonettiğimiz yerdir.

//notification service için npm i ngx-toastr kurduk bu paket anguların animasyon paketini kullandıgından ekstra olarak npm i @angular/animations kurduk