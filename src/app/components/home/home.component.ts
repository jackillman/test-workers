import { Component, OnInit } from '@angular/core';
import { WorkService } from '../../shared/services/work.service';
import { WorkerModel } from '../../shared/models/worker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private workService: WorkService) { }
  workersList:WorkerModel;
  ngOnInit() {
    this.workersList = this.workService.getAllWorkers()
  }

}
