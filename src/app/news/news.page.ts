import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 10
  };

  favorites: any[]=[
    { id: 1, url: '../assets/images/pageone/filetes.jpg', title: 'Filetes con papas' },
    { id: 2, url: '../assets/images/pageone/parrillada.jpg', title: 'Parrillada mixta' },
    { id: 3, url: '../assets/images/pageone/panque.jpg', title: 'Panque de nuez' }
  ];

  desserts: any[] = [
    { id: 1, url: '../assets/images/pageone/cereal.jpg', title: 'Cereal con fruta', likes: '200' },
    { id: 2, url: '../assets/images/pageone/chocolate.jpg', title: 'Pastel de chocolate ', likes: '311' },
    { id: 3, url: '../assets/images/pageone/fresas.jpg', title: 'Red berries with cream', likes: '211' }
  ];

  week: any=[
    { id: 1, url: '../assets/images/pageone/recipe/recipe.png', title: 'Cereal con fruta',}
  ];

  constructor() { }

  ngOnInit() {
  }

}
