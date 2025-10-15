import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { Product } from 'app/products/data-access/product.model';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [DataViewModule, CardModule, ButtonModule, DialogModule, CommonModule, TagModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  
  @Input() product!: Product;
  
  @Output() update=new EventEmitter<Product>();
  @Output() addToBasket=new EventEmitter<Product>();
  @Output() delete=new EventEmitter<Product>();
  @Output() removeFromBasket=new EventEmitter<Product>();

  public getSeverity (product: Product) :'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' | undefined {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
      return 'success';
      
      case 'LOWSTOCK':
      return 'warning';
      
      case 'OUTOFSTOCK':
      return 'danger';
      
      default:
      return undefined;
    }
  };
}
