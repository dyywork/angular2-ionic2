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
/*export class HomePage {

  constructor(public navCtrl: NavController, public app : App ,public loading:LoadingController ) {

  }

  goPerson(){
    this.navCtrl.push(Person)
  }
  loads2(navCtrl,app,loading){
    let load = new AboutPage(navCtrl, app ,loading)
    console.log(load.loading);;

  }
}*/
