/**
 * @author 丁永亚
 * @date 2018/1/24
 * @Description: tabRoots 配置tabs的数据
 */

import {Component} from "@angular/core";

import {AboutPage} from "../about/about";
import {ContactPage} from "../contact/contact";
import {HomePage} from "../home/home";
import {Native} from "../native/native";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    tabRoots: Object[];
    /*tab1Root = HomePage;
     tab2Root = AboutPage;
     tab3Root = ContactPage;
     tab4Root = Login;*/
    constructor() {
        this.tabRoots = [
            {
                root: HomePage,
                tabTitle: 'Home',
                tabIcon: 'home'
            },
            {
                root: AboutPage,
                tabTitle: 'About',
                tabIcon: 'information-circle',
            }, {
                root: ContactPage,
                tabTitle: 'Contact',
                tabIcon: 'contacts'
            }, {
                root: Native,
                tabTitle: 'native',
                tabIcon: 'logo-android'
            }
        ]
    }
}
