import { Pipe, PipeTransform } from '@angular/core';
import { IPhoneBook } from './phone.interface';
import { PhoneBook } from './phone.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<IPhoneBook>, searchParam: string): Array<IPhoneBook> {
    if (!searchParam){
      return value;
    }
    if(!value){
      return null;
    }

    return value.filter (phonebook => phonebook.first.toLowerCase().includes(searchParam.toLowerCase()) 
    || phonebook.last.toLowerCase().includes(searchParam.toLowerCase()) 
    || phonebook.number.toLowerCase().includes(searchParam.toLowerCase()));

  }

}
