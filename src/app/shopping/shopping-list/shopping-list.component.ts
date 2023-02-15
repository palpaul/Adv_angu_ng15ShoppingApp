import { Component, inject } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: [`
  
  mat-sidenav-container{
    height: 100%;

}
mat-sidenav{
    width: 250px;
    background-color: wheat;
}

mat-sidenav , mat-sidenav-content {
    padding: 15px;
}
  
  ` 
  ]
})
export class ShoppingListComponent {
  sideNavLinks:Category[]=[]
  ctcSvc = inject(CategoryService)

  ngOnInit(){
    this.ctcSvc.getCategories().subscribe({
      next: (data)=>this.sideNavLinks= data
    })
  }
}
