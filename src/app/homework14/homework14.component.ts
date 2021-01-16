import { Component, OnInit } from '@angular/core';
import { ITask } from './task.interface';
import { Task } from './task.model';

@Component({
  selector: 'app-homework14',
  templateUrl: './homework14.component.html',
  styleUrls: ['./homework14.component.scss']
})
export class Homework14Component implements OnInit {
  id: number;
  task: string;
  status: boolean;
  allTasks: Array <ITask> = [
    { id: 0, task: 'HTML5', status: true },
    { id: 1, task: 'CSS3', status: true },
    { id: 2, task: 'SCSS', status: false },
    { id: 3, task: 'Javascript', status: false },
    { id: 4, task: 'jQuery', status: false },
    { id: 5, task: 'Angular', status: false },
    { id: 6, task: 'Bootstrap', status: false },
  ];
  newNameTask: string;
  newName: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  addTask(): void {
    if (this.task.length > 0) {
      const newTask: ITask = new Task(1, this.task, false);
      if (this.allTasks.length > 0) {
        newTask.id = this.allTasks.slice(-1)[0].id + 1;
      }
      this.allTasks.push(newTask);
      this.task = '';
    }
  }

  changeStatus(index: number): void {
    this.allTasks[index].status = !this.allTasks[index].status;
  }

  deleteTask(index: number): void {
    if (confirm('Are you sure?')){
      this.allTasks.splice(index, 1)
    }
  }

  editeTask(task: ITask): void {
    this.newNameTask = task.task;
    this.id = task.id;
    this.status = task.status;
    this.newName = false;
  }

  saveNameTask(): void {
    const editTask: ITask = new Task(this.id, this.newNameTask, this.status);
    const index = this.allTasks.findIndex(elem => elem.id === editTask.id);
    this.allTasks.splice(index, 1, editTask);
    this.newNameTask = '';
    this.newName = true;
  }


}
