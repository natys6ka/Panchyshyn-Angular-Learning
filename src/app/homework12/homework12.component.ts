import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework12',
  templateUrl: './homework12.component.html',
  styleUrls: ['./homework12.component.scss']
})
export class Homework12Component implements OnInit {
  badWords: string;
  newBadWords = ['java', 'html'];
  newBadWordsString = this.newBadWords.join(' ');
  checks = false;
  text: string;
  pozor: string;

  constructor() { }

  ngOnInit(): void {
  }

  //	При кліку на ADD добавляти заборонене слово, яке відображатиметься в списку “Bad words”
  // 	Якщо поле для добавлення слова не заповнене виводити відповідне повідомлення
  sendBadWord(){
    if(this.badWords){
      this.checks = false;
      this.newBadWords.push(this.badWords);
      this.newBadWordsString = this.newBadWords.join(' ');
      this.badWords = '';
    }
    else{
      this.checks = true;
    }
  }

  resetBadWord(){
    this.newBadWords = [];
    this.newBadWordsString = this.newBadWords.join(' ');
  }

  //	При кліку на Cenzor перевіряється чи є в textarea заборонене слово, 
  // якщо так його заміняє на *, причому на ту кількість яка довжина слова.
  //	Якщо textarea порожня виводити повiдомлення про заповнення поля.
  cenzor(){
    if(this.text){
      this.pozor = '';
      this.newBadWords.forEach(element => {
        if (this.text.includes(element)) {
          let r = '*';
          for(let i = 1; i < element.length; i++) { r +=  '*';  }
          this.text = this.text.replace(element, r);
        }
      });
    }
    else { this.pozor = 'Please write text!';  };

  }



}
