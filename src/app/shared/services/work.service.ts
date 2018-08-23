import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  workers
  fromLocalsStorage = []
  constructor() { 
    let workers = [{id:0,name:"Евгений",birth:"22-12-1986",position:"фронтенд",salary:2000},
                    {id:1,name:"Андрей",birth:"02-12-1976",position:"бэкэнд",salary:5000},
                    {id:2,name:"Марина",birth:"20-04-1972",position:"мастер",salary:3000},
                    {id:3,name:"Полина",birth:"11-02-1966",position:"бэкэнд",salary:2100}
  
    ]
    if(localStorage.getItem("worker-list") !== null){
      this.fromLocalsStorage = JSON.parse(localStorage.getItem("worker-list"))
    
      if(this.fromLocalsStorage.length > 0){
        this.workers = this.fromLocalsStorage
      } else {
        this.workers = workers
      }
    } else {
      this.workers = workers
    }
    
   
 

  }
  getAllWorkers(){
    return this.workers;
  }
  
  fromLocalStorage(){

    console.log()
  }
  tolocalStorage(arr){

    localStorage.setItem("worker-list", JSON.stringify(arr))
  }
}
