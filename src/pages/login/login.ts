import { Component } from '@angular/core';

import { NavController , NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class Login {
  constructor(public navCtrl: NavController, public navParams: NavParams ) {
  }
  logIn(userName , passWord){
    this.navCtrl.push(TabsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
