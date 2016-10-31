import { Component,ViewChild } from '@angular/core';
import { Platform ,MenuController,NavController} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { PrivateInfoPage } from '../pages/privateinfo/private-info';
import { AlbumPage } from '../pages/album/album';
import { DesignWorkPage } from '../pages/designwork/design-work';
import { CollectionPage } from '../pages/collection/collection';
import { PerchaseDemandPage } from '../pages/perchasedemand/perchase-demand';
import { PasswdPage } from '../pages/passwd/passwd';
import { SettingPage } from '../pages/setting/setting';

@Component({
  templateUrl:'app.html'
})
export class MyApp {

  //the way of root component to get NavController!
  @ViewChild('mymenu') navCtrl:NavController

  constructor(
    public platform: Platform,
    public menuCtrl:MenuController
    ) {
       this.initialApp();
       this.menus = [PrivateInfoPage,AlbumPage,DesignWorkPage,CollectionPage,PerchaseDemandPage,
                     PasswdPage,SettingPage]
    
  }
  
  //define variable
  rootPage = HomePage;
  menus:Array<Component>;
  menu:Component;

  openMenu(menu){
    //close the menus
      this.menuCtrl.close();
      //nagivate to selected menu option
      this.navCtrl.push(menu);
  }

  initialApp(){
     this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  
}
