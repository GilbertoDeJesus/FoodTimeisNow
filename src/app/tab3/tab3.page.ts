import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  popular: any[] = [
    { id: 1, url: '../assets/images/pagethree/chef1.jpg', title: 'Fabian Perello' },
    { id: 2, url: '../assets/images/pagethree/chef2.jpg', title: 'Adriano Sierra' },
    { id: 3, url: '../assets/images/pagethree/chef3.jpg', title: 'Faustin Cubero' }
  ];

  constructor() {}

}
