import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {

  public days: Array<string>;
  public dates: Array<number>;
  public minNum: number;
  public maxNum: number;


  constructor() {

    this.days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    // tslint:disable-next-line:max-line-length
    this.dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23 , 24, 25, 26, 27,28, 29, 30, 31, 1, 2, 3, 4];

    this.minNum = 5;
    this.maxNum = 15;
  }

  ngOnInit() {

  }

  onSubmit() {

  }
}
