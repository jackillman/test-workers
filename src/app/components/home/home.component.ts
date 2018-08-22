import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkService } from '../../shared/services/work.service';
import { WorkerModel } from '../../shared/models/worker';
import { ModalDirective } from 'ngx-bootstrap';
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
    console.log(this.workersList)
  }

  editWorker(worker){
    this.currentWorkerForEdit = worker


    // this.modal.show();
    console.log(worker)
  }

  deleteWorker(worker){
    let ind = this.workersList.indexOf(worker);
    console.log()
    if(ind > -1){
      this.workersList.splice(ind,1);
    }
  }

  // @ViewChild(ModalDirective) modal: ModalDirective;
  // messages: string[];
 
  // showModal() {
  //   this.messages = [];
  //   this.modal.show();
  // }
  // handler(type: string, $event: ModalDirective) {
  //   this.messages.push(
  //     `event ${type} is fired${$event.dismissReason
  //       ? ', dismissed by ' + $event.dismissReason
  //       : ''}`
  //   );
  // }

  saveEditWorker(){
    for(let i in this.workersList){
      if( this.workersList[i].id == this.currentWorkerForEdit.id){
        this.workersList[i] = this.currentWorkerForEdit;
        break;
      }
    }
   console.log(this.currentWorkerForEdit) 
  }
  currentWorkerAfterEdit
  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '250px',
      data: this.currentWorkerForEdit
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.currentWorkerAfterEdit = result;
    });
  }
}
