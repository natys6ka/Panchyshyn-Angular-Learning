import { Component, OnInit } from '@angular/core';
import { ICar } from './car.interface';
import { Car } from './car.model';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.scss']
})
export class Lesson3Component implements OnInit {
  allCars: Array <ICar> = [];
  mark: string;
  model: string;
  year: number;

  constructor() { }

  ngOnInit(): void {
  }

  addCar(): void{
    const newCar: ICar = new Car (1, this.mark, this.model, this.year);
    if (this.allCars.length>0){
      newCar.id = this.allCars.slice(-1)[0].id + 1;
    }
    this.allCars.push(newCar);
    this.resetForm();
  }

  private resetForm(): void {
    this.mark = '';
    this.model = '';
    this.year = null;
  }

}
