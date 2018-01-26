import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BasicGreetingsPage } from '../basic-greetings/Basic-greetings';
import { BasicDialougesPage } from '../basic-dialouges/basic-dialouges';
import { AdvancedDialougesPage } from '../advanced-dialouges/advanced-dialouges';
import { ReadWriteLippiPage } from '../read-write-lippi/read-write-lippi';
import { TestSkillsPage } from '../test-skills/test-skills';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  loadSkillsTestPage(){
    this.navCtrl.push(TestSkillsPage,{
        parameters: "check"
    });
  }
  loadBasicGreetingsPage(){
    this.navCtrl.push(BasicGreetingsPage,{
        parameters: "check"
    });
  }
  loadBasicDialougesPage(){
    this.navCtrl.push(BasicDialougesPage,{
        parameters: "check"
    });
  }
  loadAdvancedDialougesPage(){
    this.navCtrl.push(AdvancedDialougesPage,{
        parameters: "check"
    });
  }
  loadReadWriteLippiPage(){
    this.navCtrl.push(ReadWriteLippiPage,{
        parameters: "check"
    });
  }

}
