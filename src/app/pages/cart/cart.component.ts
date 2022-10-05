import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  cart: Cart = {items: [{
    product: 'https://via.placeholder.com/150',
    name: 'snickers',
    price: 150,
    quantity: 1,
    id: 1,
    }]};

    dataSource: Array<CartItem> = [];
    displayedColumns: Array<string> = [
      'product',
      'name',
      'price',
      'quantity',
      'total',
      'action'
    ];

  constructor(private CartService: CartService) { }

  ngOnInit(): void {
    this.CartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    })
  }

  getTotal(items: Array<CartItem>): number {
    return this.CartService.getTotal(items);
  }

  onClearCart(): void {
    this.CartService.clearCart();
  }
  onRemoveFromCart(item: CartItem) :void{
    this.CartService.removeFromCart(item);
  }

  onAddQuantity(item: CartItem): void {
    this.CartService.addToCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.CartService.removeQuantity(item);
  }

}
