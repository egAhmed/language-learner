import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestSkillsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-skills',
  templateUrl: 'test-skills.html',
})
export class TestSkillsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('parameters'))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestSkillsPage');
  }

}
