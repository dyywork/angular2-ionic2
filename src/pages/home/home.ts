import {Component, Injectable} from '@angular/core';
import { NavController} from 'ionic-angular';
import { Person} from '../person/person';
import { Loading } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[Loading]
})

@Injectable()
export class HomePage {

  constructor(public navCtrl: NavController , public loads2d : Loading) {

  }
  goPerson(){
    this.navCtrl.push(Person)

  }
  loads2(){
    this.loads2d.show()
    setTimeout(()=>{
      this.loads2d.hide();
    },2000)
  }
}

