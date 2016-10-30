import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {MenuPage} from '../menu/menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
  
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  //跳转到其他窗口
  openMenuPage(){
    this.navCtrl.push(MenuPage);
  }

  selectedBrands(){}
  selectedDesigners(){}
  selectedMaterials(){}
  selectedNews(){}
  selectedDesignworks(){}


}
