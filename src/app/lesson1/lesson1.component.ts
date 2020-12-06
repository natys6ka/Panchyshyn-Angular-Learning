import { Component, OnInit, ɵSWITCH_IVY_ENABLED__POST_R3__ } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.scss']
})
export class Lesson1Component implements OnInit {
  name = 'Ivan';
  car = {
    mark: 'Hyundai',
    model: 'Tucson'
  };
  homeUrl = 'https://www.google.com/';
  homeUrlName = 'google';
  users = ['Ivan', 'Petro'];

  myClass = 'red font-xl';
  isAdd = true;
  isStyle = false;

  countCol = '2';
  countRow = '2';

  message = '';

  userName: string;
  newText: string;

  check = false;

  constructor() { }

  ngOnInit(): void {
  }

  sayHello(): string{
    return 'Hello ' + this.name;
  }

  add(): void {
    this.message = 'Text after click'
  }

  sendMessage(){
    // this.newText = this.userName;
    if(this.userName){
      this.newText = this.userName;
      this.check = false;
    }
    else{
      // alert('Пусте поле')
      this.check = true;
    }
  }




}
