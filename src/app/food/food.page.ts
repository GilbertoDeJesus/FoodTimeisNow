import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  recipe: any={
    autor: 'Panaderia',
    fecha: '08/10/2020',
    tPrep: '35 minutos',
    tCocc: '45 minutos',
    tTota: '1.20 horas'
  };

  ingredients: any[]=[
    '1 taza de mantequilla',
    '1 taza de azúcar',
    '5 huevos',
    '1 cucharadita de vainilla',
    '1 2/3 tazas de harina',
    '1 cucharadita de polvo para hornear',
    '1/2 cucharadita de canela en polvo',
    '3/4 de taza de leche evaporada',
    '1 taza de nueces picadas',
    '1/4 de taza de azúcar'
  ]

  constructor(public toastController: ToastController) { }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: '¡Hola!',
      message: 'Click para cerrar',
      position: 'middle',
      buttons: [
        {
          side: 'start',
          icon: 'construct',
          text: 'Proximamente',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  ngOnInit() {
  }

}
