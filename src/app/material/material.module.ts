import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatCardModule} from '@angular/material/card'; 
const material = [
  MatTabsModule,
  MatChipsModule,
  MatGridListModule,
  MatCardModule
]

@NgModule({
  
  imports: [
    material
  ],
  exports: [
    material
  ]
})
export class MaterialModule { }
