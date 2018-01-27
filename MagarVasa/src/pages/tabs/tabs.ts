import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { TestSkillsPage} from '../test-skills/test-skills'
import { NavController } from 'ionic-angular';
import {DonationPage} from '../donation/donation';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TestSkillsPage
  tab3Root = DonationPage
  constructor(public navCtrl: NavController) {

  }
}
