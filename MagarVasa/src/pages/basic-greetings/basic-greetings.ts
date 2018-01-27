import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-basic-greetings',
  templateUrl: 'basic-greetings.html',
})
export class BasicGreetingsPage {
   items = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [1,2,3,4,5];
    //this.navCtrl.push(ViewProfilePage, data)
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad DonationPage');
    this.items = [3,4,5,6]
  }

}
