import { Injectable } from '@angular/core';
import { Product } from 'app/products/data-access/product.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
// GetProductsQuantity() :string{
//   return this.ProductsInBasket.length.toString();
// }
GetProductsQuantity(): { name: string; quantity: number }[] {
  const counts: { [name: string]: number } = {};

  for (const product of this.ProductsInBasket) {
    counts[product.name] = (counts[product.name] || 0) + 1;
  }

  return Object.entries(counts).map(([name, quantity]) => ({ name, quantity }));
}
  public get cartItemCount(): number {
    return this.ProductsInBasket.length;
  }
  public ProductsInBasket: Product[] = [];
  AddProduct(product: Product) {
    this.ProductsInBasket.push(product);
    console.log(this.ProductsInBasket);
  }
  RemoveProduct(product: Product) {
    let index: number;
    index = this.ProductsInBasket.lastIndexOf(product);
    if (index > -1) {
      this.ProductsInBasket.splice(index, 1);
    }
  }
  
}
