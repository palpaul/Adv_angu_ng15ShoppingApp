import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { DataService } from './data.service';
import {map} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private restUrl = "http://localhost:3000/wsproducts"
  
  constructor(private ds:DataService) { }

  getProducts(){
    return this.ds.readData(this.restUrl).pipe(map(restData=>restData as Product[]))

  }

  
}
