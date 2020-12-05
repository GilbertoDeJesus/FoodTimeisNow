import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab2Page } from '../tab2/tab2.page';

import { RecipesPage } from './recipes.page';

const routes: Routes = [
  {
    path: '',
    component: RecipesPage
  },
  {
    path: 'food',
    loadChildren: () => import('../food/food.module').then(m => m.FoodPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesPageRoutingModule {}
