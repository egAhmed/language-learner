import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestSkillsPage } from './test-skills';

@NgModule({
  declarations: [
    TestSkillsPage,
  ],
  imports: [
    IonicPageModule.forChild(TestSkillsPage),
  ],
})
export class TestSkillsPageModule {}
