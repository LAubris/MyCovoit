import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public alertCtrl: AlertController) { }  
 async supprimer() { 
  const alert = await this.alertCtrl.create({ 
  header: 'Suppression', 
  subHeader: 'Etes-vous sûr de vouloir supprimer ?',
  buttons: ['NON','OUI'] 
  }); 
  await alert.present(); 
  const result = await alert.onDidDismiss();  
  console.log(result); 
  } 
 } 