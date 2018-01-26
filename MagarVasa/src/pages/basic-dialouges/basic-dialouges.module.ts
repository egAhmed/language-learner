import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasicDialougesPage } from './basic-dialouges';

@NgModule({
  declarations: [
    BasicDialougesPage,
  ],
  imports: [
    IonicPageModule.forChild(BasicDialougesPage),
  ],
})
export class BasicDialougesPageModule {}
