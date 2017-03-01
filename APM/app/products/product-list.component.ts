import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {

    constructor(private _productService: ProductService) {
    }

    ngOnInit(): void {
        console.log('In OnInit');
        this.products = this._productService.getProducts();
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMarging: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[] = [];

    toggleImage() {
        this.showImage = !this.showImage;
    }
}