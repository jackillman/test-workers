import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter',
  pure: false
})
export class MyFilterPipe implements PipeTransform {

  transform(items , filterBy: string) {

    if(filterBy){
      return items.filter(function (item: any) {
        for (let property in item) {
          if (item[property] === null || item[property] == undefined) {
            continue;
          }
          if (item[property].toString().toLowerCase().includes(filterBy)) {
            return true;
          }
        }
        return false;
      });
    } else {
      return items
    }

  }
}
