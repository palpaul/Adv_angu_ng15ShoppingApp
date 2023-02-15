import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import {map} from "rxjs/operators"
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private restUrl = "http://localhost:3000/wscategories"

  constructor(private ds:DataService) { }


getCategories(){
  return this.ds.readData(this.restUrl).pipe(map(restData=>restData as Category[]))
}

addCategory(newCategory:Category){
  return this.ds.createData(this.restUrl,newCategory).pipe(map(restData=>restData as Category))
}

updateCategory(modifiedCategory:Category){
  return this.ds.updateData(this.restUrl,modifiedCategory).pipe(map(restData=>restData as Category))
}

deleteCategory(id:number){
  return this.ds.deleteData(this.restUrl,id)
}

}
