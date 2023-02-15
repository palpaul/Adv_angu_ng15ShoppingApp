import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  productList:Product[] = []


  prodSvc = inject(ProductService)
  actvRoute = inject(ActivatedRoute)

    myDate = new Date()
    searchString = ""
    


  ngOnInit(){
    this.prodSvc.getProducts().subscribe({

      //next: (data)=>this.productList= data
      //addring actvRoute route codndiotn
      next: (data)=>{
      this.actvRoute.params.subscribe({
        //reading the paramdata from addressbar /1, /2 etc  ie. cid okay while clocking on side bar mobile ,laptops etc
        next: (paramData:any)=>{
            console.log(paramData.cid)

            let paramIdValue = paramData.cid
            if(paramIdValue == undefined){
              this.productList = data

            }else{
              this.productList = data.filter((e)=>e.ctgid==paramIdValue)
            }
        }
      })
      }
    })
  }

}
