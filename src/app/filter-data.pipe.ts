import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    switch (args) {
      case 'All':
        return value;
      case 'Active':
        return value.filter(item => !item.checked);
        //filterData = filterData.filter(item => !item.checked);
      case 'Completed':
        return value.filter(item => item.checked);
        //filterData = filterData.filter(item => item.checked);
    }
    return  null;
  }

}
