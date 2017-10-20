import { Component ,Injectable} from '@angular/core';
import { NavController, App ,LoadingController} from 'ionic-angular';

import { Login } from '../login/login';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  constructor(public navCtrl: NavController, public app : App , public loading:LoadingController) {

  }
  goLogin(){
    this.app.getRootNav().setRoot(Login);
  }
  loads(){
    const load = this.loading.create({
      content:'please waiting'
    });
    load.present();
    setTimeout(()=>{
      load.dismiss();
    },2000)
  }
}

/*加载层的封装方式*/
@Injectable()
export class Loading {
  constructor(public load:LoadingController){}
  lo;
  show(){
    if(!this.lo){
      this.lo = this.load.create({
        content:"please",
        dismissOnPageChange:true
      });
      this.lo.present();
    }
  }
  hide(){
    if(this.lo){
      this.lo.dismiss();
      this.lo = null;
    }
  }
}
