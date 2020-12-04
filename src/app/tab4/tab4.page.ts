import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  menuOp: any[] = [
    { id: 1, url: '../assets/images/pagetwo/fruit.jpg', title: 'Panque de nuez', author: 'Fabian Perello', create: '08/10/2020' },
    { id: 2, url: '../assets/images/pagetwo/breakfast.jpg', title: 'Chocolat Cake', author: 'Saida Coll', create: '12/11/2020' },
    { id: 3, url: '../assets/images/pagetwo/botanas.jpg', title: 'Bistec ahumado', author: 'Saida Coll', create: '04/06/2020' },
    { id: 4, url: '../assets/images/pagetwo/drinks.jpg', title: 'Margaritas', author: 'Adrian Sierra', create: '03/02/2020' },
    { id: 5, url: '../assets/images/pagetwo/all.jpg', title: 'Parrillada mixta', author: 'Faustino Cub', create: '14/05/2020' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
