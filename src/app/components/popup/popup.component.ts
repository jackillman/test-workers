import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { WorkerModel } from '../../shared/models/worker';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.sass']
})
export class PopupComponent implements OnInit {
  ngOnInit(): void {
 
  }
  currentWorker;
  newWorker;
  workerDelete
  mode;
  curWorker;
  onValueChange(e){
    console.log(e)
  }
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data)
      if(data.mode =="edit"){
        this.currentWorker  = new WorkerModel();
        console.log(data.worker.birth)
        this.currentWorker.id = data.worker.id
        this.currentWorker.name = data.worker.name
        this.currentWorker.birth = data.worker.birth
        this.currentWorker.position = data.worker.position
        this.currentWorker.salary = data.worker.salary;
        console.log(this.currentWorker.birth)
      } else if (data.mode == "create"){

        this.newWorker = data.worker
      } else if (data.mode == "delete"){
        this.workerDelete = data.worker
      }


      this.mode = data.mode
    }
  
    
    saveChanges(){
      console.log(this.currentWorker.birth)
      let dateObj = new Date(this.currentWorker.birth);
      let month = dateObj.getUTCMonth() + 1; //months from 1-12
      let day = dateObj.getUTCDate() + 1;
      let year = dateObj.getUTCFullYear();
      console.log(month)
  //    this.currentWorker.birth = day + "/" + month + "/" + year;
      console.log(this.currentWorker.birth)
      this.dialogRef.close(this.currentWorker)
      console.log( this.currentWorker)
    }
    delete(){
      console.log(this.workerDelete)
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
 
  create(){
    this.dialogRef.close(this.newWorker)
    console.log(this.newWorker)
  }

}
