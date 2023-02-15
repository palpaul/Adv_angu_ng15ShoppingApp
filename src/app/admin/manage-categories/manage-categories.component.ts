import { Component } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent {

  mgCategories:Category[] = []
  frmCategory:Category = new Category(0,"")

constructor(private ctgSvc:CategoryService){}

ngOnInit(){
  this.getAllCategories()
}

getAllCategories(){
  this.ctgSvc.getCategories().subscribe({
    next: (data)=>{
      console.log("Success")
      this.mgCategories=data
    },
    error:(err)=>{
      console.log("Get Error", err)
    }
  })
}

save(){

  if(this.frmCategory.id==0){
  //add
  this.ctgSvc.addCategory(this.frmCategory).subscribe({
    next:(data)=>{
      console.log("Add Success")
      this.getAllCategories()
    },
    error:(err)=>console.log("err",err)
  })

}else{
  //update
  this.ctgSvc.updateCategory(this.frmCategory).subscribe({
    next:(data)=>{
      console.log("update Success")
      this.getAllCategories()
    },
    error:(err)=> console.log("update err",err)
  })
}
this.frmCategory = new Category(0,"")
}

  //this.frmCategory = new Category(0,"")


//delete
delete(id:number){
this.ctgSvc.deleteCategory(id).subscribe({
  next:()=>{
    this.getAllCategories()
    console.log("deleted success")
  },
  error:(err)=>{
    console.log("Error",err)
  }
})
}

//edit
edit(ctg:Category){
  this.frmCategory=ctg
}


}
