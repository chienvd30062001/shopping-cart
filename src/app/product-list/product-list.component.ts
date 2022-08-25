import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../Product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  @Input() products : Product[] | undefined;
  @Output() onRemoveProduct = new EventEmitter();
  @Output() onUpdateQuantity = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.products);
  }

  removeProduct(productId : string) : void{
    this.onRemoveProduct.emit(productId)
  }

  inputQuantity(productID :number, inputElement :HTMLInputElement)
  {
    let value = inputElement.value;
    let intValue =  parseInt(value);

    if(intValue < 1)
    {
      intValue = -intValue;
    }
    else if (value.length > 2)
    { 
      inputElement.value = value.slice(0,2);
    }

    this.onUpdateQuantity.emit({ productID, quantity: parseInt(inputElement.value) || 0})
  }
  // updateQuantity(element : any):void{
  //  // debugger
  //   // if(element.value > 1 || element.value < 99 || element.value != 0){
  //   //   this.valueElement = element.value;
  //   // }
  //   // else if(element.value < 1 || element.value > 99 || element.value == 0)
  //   // {
  //   //   element.value = 0;
  //   // }
  //   //console.log(typeof(element.value));
  //     this.onValueElement.emit(element.value);
  // }

  // inputQuantity(id: number, inputElement: HTMLInputElement,input: HTMLInputElement) {
  //   const value = inputElement.value;
  //   const intValue = parseInt(value);
  //   input.value
  //   if (intValue < 1) {
  //     inputElement.value = -intValue + '';
  //   } else if (value.length > 2) {
  //     inputElement.value = value.slice(0, 2);
  //   }

  //   this.onUpdateQuantity.emit({ id, quantity: parseInt(inputElement.value) || '' });
  // }
}
