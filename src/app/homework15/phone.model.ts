import { IPhoneBook } from "./phone.interface";

export class PhoneBook implements IPhoneBook {
    constructor(
        public first: string,
        public last: string,
        public number: string, 
    ){}
}