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
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      if(data.mode =="edit"){
        this.currentWorker  = new WorkerModel();
        this.currentWorker.id = data.worker.id
        this.currentWorker.name = data.worker.name
        this.currentWorker.birth = data.worker.birth
        this.currentWorker.position = data.worker.position
        this.currentWorker.salary = data.worker.salary;
      } else if (data.mode == "create"){

        this.newWorker = data.worker
      } else if (data.mode == "delete"){
        this.workerDelete = data.worker
      }


      this.mode = data.mode
    }
  
    curWorker
    saveChanges(){
      console.log( this.currentWorker)
    }
    delete(){
      console.log(this.workerDelete)
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
  create(){
    console.log(this.newWorker)
  }

}
