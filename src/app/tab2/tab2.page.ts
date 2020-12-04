import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  menuOp: any[]=[
    { id: 1, url: '../assets/images/pagetwo/fruit.jpg', title: 'Postres' },
    { id: 2, url: '../assets/images/pagetwo/breakfast.jpg', title: 'Desayunos' },
    { id: 3, url: '../assets/images/pagetwo/botanas.jpg', title: 'Botanas' },
    { id: 4, url: '../assets/images/pagetwo/drinks.jpg', title: 'Bebidas' },
    { id: 5, url: '../assets/images/pagetwo/all.jpg', title: 'Todo' }
  ]

  constructor() {}

}
