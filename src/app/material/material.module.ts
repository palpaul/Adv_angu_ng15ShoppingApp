import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatListModule} from "@angular/material/list";
import {MatDividerModule} from "@angular/material/divider"

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[MatToolbarModule,MatSidenavModule,MatListModule,MatDividerModule]
})
export class MaterialModule { }
