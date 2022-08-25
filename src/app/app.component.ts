import { Component } from '@angular/core';
import { Product } from './Product.model';
import { PromoCode } from './PromoCode.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products : Product[]= [
    {
      id:1,
      name:'PRODUCT ITEM NUMBER 1',
      description :'Description for product item number 1',
      thumbnail:'https://via.placeholder.com/200x150',
      price: 5.99,
      quantity:2
    },  
    {
      id:2,
      name:'PRODUCT ITEM NUMBER 2',
      description :'Description for product item number 2',
      thumbnail:'https://via.placeholder.com/200x150',
      price:9.99,
      quantity:3
    },  
    {
      id:3,
      name:'PRODUCT ITEM NUMBER 3',
      description :'Description for product item number 2',
      thumbnail:'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 2
    }
  ]
  promoCodes: PromoCode[] = [
    {
      code: 'AUTUMN',
      discountPercent: 10
    },
    {
      code: 'WINTER',
      discountPercent: 20
    }
  ];
  numberItems : number = 0;
  subTotal: number = 0;
  discountPercent: number = 0;
  discount: number = 0;
  taxPercent:number = 10;
  tax: number = 10;

  ngOnInit(): void {
    this.updateCartSummary(); // cap nhat lai du lieu moi khi khoi tao 
    // console.log("init");
  }


  updateCartSummary(){//set lai gia tong gia tien cua san pham
    let numberItems: number = 0;
    let subTotal: number = 0;
    
    for(let product of this.products){
      numberItems += product.quantity;
      subTotal += (product.price * product.quantity);
    }

    this.numberItems = numberItems; 
    this.subTotal = subTotal;
  }

  removeProduct(productID :number){ // an xoa phan tu
    const index = this.products.findIndex(product => product.id === productID);
    if(index !== -1){
      this.products.splice(index,1);
    }

    // tinh lai tong so luowng san phan va tong tien
    this.updateCartSummary();
  }
 
  updateProductQuantity(data : {productID:number ; quantity: number}){
    const product = this.products.find(product => product.id === data.productID);
    if(product){
      product.quantity = data.quantity || 0;
    }

    this.updateCartSummary();
  }

  applyPromoCode(code: string){
    const promoCode = this.promoCodes.find(
      promoCode => promoCode.code === code
    );
     this.discountPercent = promoCode ? promoCode.discountPercent : 0;
      this.discount = (this.subTotal * this.discountPercent)/100;

      if (this.discount > 0) {
        alert(`The promotional code was applied.`);
      } else {
        alert(
          'Sorry, the promotional code you entered is not valid! Try code "AUTUMN" (discount 10% to all cart items) or "WINTER" (discount 20% to all cart items).'
        );
      }
  }
}
