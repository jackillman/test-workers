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
  currentWorkerForEdit:WorkerModel;
  newWorker:WorkerModel;
  search:string;
  mode:any;
  page: number = 1;

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
      let ind = this.workersList.indexOf(result);
      console.log()
      if(ind > -1){
        this.workersList.splice(ind,1);
        this.workService.tolocalStorage(this.workersList)
      }
    }); 
  }

  saveEditWorker(){
    for(let i in this.workersList){
      if( this.workersList[i].id == this.currentWorkerForEdit.id){
        this.workersList[i] = this.currentWorkerForEdit;
        break;
      }
    }
    this.workService.tolocalStorage(this.workersList)
  }


  createWorker(): void {
    this.mode ="create"
    let newWorker = new WorkerModel()
    newWorker.id = this.workersList.length;
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '550px',
       data: {worker: newWorker, mode: this.mode}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      let dateObj = new Date(result.birth);
      let month = dateObj.getUTCMonth() + 1; //months from 1-12
      let day = dateObj.getUTCDate();
      let year = dateObj.getUTCFullYear();
      result.birth = day + "/" + month + "/" + year;
      result.id = this.workersList.length;
      this.workersList.push(result)
      this.workService.tolocalStorage(this.workersList)
    });
  }


  
  editWorker(worker): void {
    this.mode ="edit"
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '550px',
       data: {worker: worker,mode: this.mode}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      let dateObj = new Date(result.birth);
      let month = dateObj.getUTCMonth() + 1; //months from 1-12
      let day = dateObj.getUTCDate() + 1;
      let year = dateObj.getUTCFullYear();
      result.birth = day + "/" + month + "/" + year;
      this.currentWorkerForEdit = result;

      if(this.currentWorkerForEdit ){
        this.saveEditWorker()
      }
      console.log(result)
    });
  }

}
