import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkService } from '../../shared/services/work.service';
import { WorkerModel } from '../../shared/models/worker';
import { MatDialog } from '@angular/material';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private workService: WorkService,public dialog: MatDialog) { }
  workersList:WorkerModel[]=[];
  currentWorkerForEdit:WorkerModel
  ngOnInit() {
    this.workersList = this.workService.getAllWorkers()

  }

  deleteWorker(worker){
    this.mode ="delete"
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '550px',
       data: {worker:worker,mode: this.mode}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
      //  this.newWorker = result
      //  this.newWorker.id =  
       
    let ind = this.workersList.indexOf(result);
    console.log()
    if(ind > -1){
      this.workersList.splice(ind,1);
      this.workService.tolocalStorage(this.workersList)
    }
      
      console.log(result)
    });
    

  }

  saveEditWorker(){
    for(let i in this.workersList){
      if( this.workersList[i].id == this.currentWorkerForEdit.id){
        this.workersList[i] = this.currentWorkerForEdit;
        let dateObj = new Date(this.currentWorkerForEdit.birth);
        let month = dateObj.getUTCMonth() + 1; //months from 1-12
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();
        
        this.currentWorkerForEdit.birth = day + "-" + month + "-" + year;
        console.log(this.currentWorkerForEdit.birth)
        break;
      }
    }
    this.workService.tolocalStorage(this.workersList)
   console.log(this.currentWorkerForEdit) 
  }
  newWorker
  createWorker(): void {
    this.mode ="create"
    let newWorker = new WorkerModel()
    newWorker.id = this.workersList.length;
    // this.currentWorkerForEdit = worker
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '550px',
       data: {worker: newWorker, mode: this.mode}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      result.id = this.workersList.length
      //  this.newWorker = result
      //  this.newWorker.id =  
       this.workersList.push(result)
       this.workService.tolocalStorage(this.workersList)

      
      console.log(result)
    });
  }


  mode:any
  editWorker(worker): void {
    this.mode ="edit"
    // this.currentWorkerForEdit = worker
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '550px',
       data: {worker: worker,mode: this.mode}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.currentWorkerForEdit = result

      if(this.currentWorkerForEdit ){
        this.saveEditWorker()
      }
      
      console.log(result)
    });
  }
}
