import { ICar } from "./car.interface";

export class Car implements ICar {
    constructor (
        public id: number,
        public mark: string,
        public model: string,
        public year: number,
        public available: boolean = false
    ) {}
}