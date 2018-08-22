import {MatButtonModule, MatDialogModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatDialogModule],
  exports: [MatButtonModule, MatDialogModule],
})
export class MyMaterialModule { }