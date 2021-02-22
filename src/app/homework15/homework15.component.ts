import { Component, OnInit } from '@angular/core';
import { IPhoneBook } from './phone.interface';
import { PhoneBook } from './phone.model';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-homework15',
  templateUrl: './homework15.component.html',
  styleUrls: ['./homework15.component.scss']
})
export class Homework15Component implements OnInit {
  first: string;
  last: string;
  number: string;
  allPhone: Array <IPhoneBook> = [
    { first: 'Petro', last: 'Zhuk', number: '0671234567'},
    { first: 'Ivan', last: 'Ivaniv', number: '0985648596'},
    { first: 'Pavlo', last: 'Didula', number: '0980125678'},
    { first: 'Oleg', last: 'Oliynyk', number: '0685634518'},
    { first: 'Yura', last: 'Didukh', number: '0671534698' },
    { first: 'Natalia', last: 'Panchyshyn', number: '0971364987' },
    { first: 'Artem', last: 'Burenok', number: '0613456198' },
  ];
  searchPhoneBook: string;
  order: string = 'allPhone.first'; 
  reverse: boolean = false; 

  addFirstName: string;
  addSecondName: string;
  addNumber: string;
  modalAdd: boolean = false;
  modalEdit: boolean = false;
  editFirstName: string;
  editSecondName: string;
  editNumber: string;
  a: number;

constructor(private orderPipe: OrderPipe) { }

  ngOnInit(): void {
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  } 

  showModalAdd(): void {
      this.modalAdd = !this.modalAdd;
  }

  addPhone(): void {
    if (this.addNumber.length > 0) {
      const newNum: IPhoneBook = new PhoneBook(this.addFirstName, this.addSecondName, this.addNumber);
      this.allPhone.push(newNum);
      this.addFirstName = '';
      this.addSecondName = '';
      this.addNumber = '';
    }
    this.showModalAdd();
  }

  deletePhone(i: number): void {
    if (confirm('Are you sure?')){
      this.allPhone.splice(i, 1)
    }
  }

  showModalEdit(phonebook: IPhoneBook): void {
    this.modalEdit = true;

    this.a = this.allPhone.indexOf(phonebook);

    this.editFirstName = phonebook.first;
    this.editSecondName = phonebook.last;
    this.editNumber = phonebook.number;
}

editPhone(phonebook: IPhoneBook): void {
  const editedNum: IPhoneBook = new PhoneBook(this.editFirstName, this.editSecondName, this.editNumber);
  this.allPhone.splice(this.a, 1, editedNum);

  this.editFirstName = '';
  this.editSecondName = '';
  this.editNumber = '';
  this.modalEdit = false;
}

}
