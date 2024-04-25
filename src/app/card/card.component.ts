import { Iproduct } from './../models/iproduct';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productsList } from '../models/productsList';
import { ProductItemComponent } from './product-item/product-item.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  products: Iproduct[] = [];

  constructor() {
    this.products = productsList;
  }


  // products: { id: number, name: string, imgURL: string, price: number, quantity: number }[] = [
  //   {
  //     id: 1,
  //     name: 'Ring jewllry',
  //     imgURL: "Product.png",
  //     price: 230.99,
  //     quantity: 10
  //   },
  //   {
  //     id: 2,
  //     name: 'cotton T-shirt',
  //     imgURL: "Product2.png",
  //     price: 199.99,
  //     quantity: 0
  //   },
  //   {
  //     id: 3,
  //     name: 'Gray Blast',
  //     imgURL: "product3.png",
  //     price: 149.99,
  //     quantity: 8
  //   },
  //   {
  //     id: 4,
  //     name: ' Tango Labtop',
  //     imgURL: "product4.png",
  //     price: 100.99,
  //     quantity: 1
  //   },
  //   {
  //     id: 5,
  //     name: 'Pineapple Paradise',
  //     imgURL: "product5.png",
  //     price: 209.99,
  //     quantity: 0
  //   },
  //   {
  //     id: 6,
  //     name: 'Digital Alarm',
  //     imgURL: "product6.png",
  //     price: 179.99,
  //     quantity: 9
  //   }
  // ];
}

