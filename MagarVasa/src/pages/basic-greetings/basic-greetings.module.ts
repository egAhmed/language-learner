import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasicGreetingsPage } from './basic-greetings';

@NgModule({
  declarations: [
    BasicGreetingsPage,
  ],
  imports: [
    IonicPageModule.forChild(BasicGreetingsPage),
  ],
})
export class BasicGreetingsPageModule {}
