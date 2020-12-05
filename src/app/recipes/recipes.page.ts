import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 10
  };


  week: any = 
    { id: 1, url: '../assets/images/pageone/recipe/cake.png', title: 'Pastel de chocolate con fresas', };

  desserts: any[] = [
    { id: 1, url: '../assets/images/pageone/cereal.jpg', title: 'Cereal con fruta', likes: '200' },
    { id: 2, url: '../assets/images/pageone/chocolate.jpg', title: 'Pastel de chocolate ', likes: '311' },
    { id: 3, url: '../assets/images/pageone/fresas.jpg', title: 'Red berries with cream', likes: '211' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
