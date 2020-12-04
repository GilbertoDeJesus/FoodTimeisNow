import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.page.html',
  styleUrls: ['./popular.page.scss'],
})
export class PopularPage implements OnInit {

  popular: any[] = [
    { id: 1, url: '../assets/images/pageone/popular/filetes.jpg', title: 'Filetes con papas' },
    { id: 2, url: '../assets/images/pageone/popular/parrillada.jpg', title: 'Parrillada mixta' },
    { id: 3, url: '../assets/images/pageone/popular/panque.jpg', title: 'Panque de nuez' },
    { id: 4, url: '../assets/images/pageone/popular/cereal.jpg', title: 'Cereal con fruta' },
    { id: 5, url: '../assets/images/pageone/popular/chocolate.jpg', title: 'Pastel de chocolate ' },
    { id: 6, url: '../assets/images/pageone/popular/fresas.jpg', title: 'Red berries with cream' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
