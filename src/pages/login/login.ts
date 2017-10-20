import { Component} from '@angular/core';



import { NavController , NavParams , LoadingController} from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import {NgForm} from "@angular/forms";


/**
 * Generated class for the Login page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public loading : LoadingController) {
  }
  logIn(userName , passWord){
    console.log(userName.value);
    console.log(passWord.value);
    this.navCtrl.push(TabsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
