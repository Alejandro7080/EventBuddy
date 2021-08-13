import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-find-a-buddy',
  templateUrl: './find-a-buddy.page.html',
  styleUrls: ['./find-a-buddy.page.scss'],
})
export class FindABuddyPage implements OnInit {
  people = [
    {
      name: "Bob",
      title: "UCLA Sophomore",
      location: "Los Angeles, CA",
      pfp: "../../assets/pfp2.jpeg",
    },
    {
      name: "Alexander",
      title: "USC Student",
      location: "Glendale, CA",
      pfp: "../../assets/pfp4.jpg",
    },
    {
      name: "Samantha",
      title: "Baseball enthusiast",
      location: "Los Angeles, CA",
      pfp: "../../assets/pfp3.jpg",
    }
  ]
  
  constructor(public alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Disclaimer: Fest-go advises you to first get to know someone, before meeting up with them',
      buttons: ['OK'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  ngOnInit() {
  }

}
