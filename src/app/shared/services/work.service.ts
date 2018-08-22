import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  workers
  constructor() { 
    this.workers = [{id:0,name:"Евгений",birth:"22-12-1986",position:"фронтенд",salary:2000},
                    {id:1,name:"Андрей",birth:"02-12-1976",position:"бэкэнд",salary:5000},
                    {id:2,name:"Марина",birth:"20-04-1972",position:"мастер",salary:3000},
                    {id:3,name:"Полина",birth:"11-02-1966",position:"бэкэнд",salary:2100}
  
    ]
  }
  getAllWorkers(){
    return this.workers;
  }
 
}
