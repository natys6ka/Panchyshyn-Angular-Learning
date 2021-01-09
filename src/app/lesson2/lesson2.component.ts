import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.scss']
})
export class Lesson2Component implements OnInit {
  isShow: boolean;
  name: string;
  checking: boolean;
  // arrUsers: Array <string> = ['Ivan', 'Petro', 'Pavlo'];
  arrObjUsers: Array <any> = [
    {name: 'Ivan', age: 25},
    {name: 'Petro', age: 18},
    {name: 'Pavlo', age: 35},
  ];
  arrYears: Array <number> = [2010, 2011, 2012, 2013, 2014, 2015];
  person: string;

  elementStyles: any = {
    color: 'red',
    fontSize: '25px',
  };
  isName: string = 'Ivanko';


//---------------------------------------------------------------
  userName:string;
  arrUsers: Array <string> = ['Ivan', 'Petro', 'Pavlo'];
//---------------------------------------------------------------


  constructor() { }

  ngOnInit(): void {
  }

  show(): void{
    this.isShow = !this.isShow;
    this.name = 'admin';
  }

  check(): void{
    this.checking = !this.checking;
  }
//---------------------------------------------------------------
  addUser(): void {
    if(this.userName){
      this.arrUsers.push(this.userName);
      this.userName='';
    }
  }
  removeUser(index: number): void {
    this.arrUsers.splice(index, 1);
  }
//---------------------------------------------------------------




}






