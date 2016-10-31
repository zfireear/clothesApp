import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PrivateInfoPage } from '../pages/privateinfo/private-info';
import { AlbumPage } from '../pages/album/album';
import { DesignWorkPage } from '../pages/designwork/design-work';
import { CollectionPage } from '../pages/collection/collection';
import { PerchaseDemandPage } from '../pages/perchasedemand/perchase-demand';
import { PasswdPage } from '../pages/passwd/passwd';
import { SettingPage } from '../pages/setting/setting';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrivateInfoPage,
    AlbumPage,
    DesignWorkPage,
    CollectionPage,
    PerchaseDemandPage,
    PasswdPage,
    SettingPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrivateInfoPage,
    AlbumPage,
    DesignWorkPage,
    CollectionPage,
    PerchaseDemandPage,
    PasswdPage,
    SettingPage
  ],
  providers: [
   
  ]
})
export class AppModule {}
