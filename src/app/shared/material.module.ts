import {MatButtonModule, MatDialogModule,MatDatepickerModule,MatFormFieldModule,MatNativeDateModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatDialogModule,MatDatepickerModule,MatFormFieldModule,MatNativeDateModule ],
  exports: [MatButtonModule, MatDialogModule,MatDatepickerModule,MatFormFieldModule,MatNativeDateModule ]
})
export class MyMaterialModule { }