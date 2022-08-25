import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
})
export class CartSummaryComponent implements OnInit {
  @Input() subTotal: number=0;
  @Input() tax: number=0;
  @Input() discount: number=0;
  
  constructor(){}
  ngOnInit(): void {
      console.log("cart-summary");
  }
}
