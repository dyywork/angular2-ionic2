import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';


/**
 * Generated class for the Person page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class Person {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Person');
  }

}
