import { Component, OnInit } from '@angular/core';
import { ICar } from '../lesson3/car.interface';
import { IUser } from './user.interface';
import { User } from './user.model';

@Component({
  selector: 'app-homework13',
  templateUrl: './homework13.component.html',
  styleUrls: ['./homework13.component.scss']
})
export class Homework13Component implements OnInit {
  id: number;
  login: string;
  password: string;
  email: string;
  allUsers: Array <IUser> = [];
  editIndex: number;
  editStatus: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  addUser(): void {
    const newUser: IUser = new User(1, this.login, this.password, this.email);
    if (this.allUsers.length > 0) {
      newUser.id = this.allUsers.slice(-1)[0].id + 1;
    }
    this.allUsers.push(newUser);
    this.resetForm();
  }

private resetForm(): void{
  this.login = '';
  this.password = '';
  this.email = '';
}
deleteUser(index: number): void {
// this.allUsers.splice(index, 1);
  if (confirm('Are you sure?')){
    this.allUsers.splice(index, 1)
  }
}
// editeUser(index: number): void {
//   this.login = this.allUsers[index].login;
//   this.password = this.allUsers[index].password;
//   this.email = this.allUsers[index].email;
//   this.id = this.allUsers[index].id;
//   this.editIndex = index;
//   this.editStatus = !this.editStatus;
// }
// saveUser(): void {
//   this.allUsers[this.editIndex].login = this.login;
//   this.allUsers[this.editIndex].password = this.password;
//   this.allUsers[this.editIndex].email =  this.email;
//   this.allUsers[this.editIndex].id = this.id;
//   this.editIndex = null;
//   this.editStatus = !this.editStatus;
//   this.resetForm();
// }

editeUser(user: IUser): void {

  this.id = user.id;
  this.login = user.login;
  this.password = user.password;
  this.email = user.email;
  this.editStatus = true;

}
saveUser(): void {
  const editUser: IUser = new User(this.id, this.login, this.password, this.email);
  const index = this.allUsers.findIndex(elem => elem.id === editUser.id);
  this.allUsers.splice(index, 1, editUser);
  this.editStatus = false;
  this.resetForm();
}

}
