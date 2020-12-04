import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  news:boolean=false;
  constructor() {}

  newShow(){
    this.news=false;
  }
  newPop() {
    this.news = true;
  }

}
