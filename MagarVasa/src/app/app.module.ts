import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import { BasicGreetingsPage } from '../pages/basic-greetings/Basic-greetings';
import { BasicDialougesPage } from '../pages/basic-dialouges/basic-dialouges';
import { AdvancedDialougesPage } from '../pages/advanced-dialouges/advanced-dialouges';
import { ReadWriteLippiPage } from '../pages/read-write-lippi/read-write-lippi';
import { TestSkillsPage } from '../pages/test-skills/test-skills';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    BasicGreetingsPage,
    BasicDialougesPage,
    AdvancedDialougesPage,
    ReadWriteLippiPage,
    TestSkillsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    BasicGreetingsPage,
    BasicDialougesPage,
    AdvancedDialougesPage,
    ReadWriteLippiPage,
    TestSkillsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
