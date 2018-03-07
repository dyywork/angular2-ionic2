/**
 * @author 丁永亚
 * @date 2018/1/24
 * @Description:
 */
import {ErrorHandler, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {MyApp} from "./app.component";

import {AboutPage} from "../pages/about/about";
import {ContactPage} from "../pages/contact/contact";
import {HomePage} from "../pages/home/home";

import {Native} from "../pages/native/native";

import {TabsPage} from "../pages/tabs/tabs";
import {Person} from "../pages/person/person";

import {Login} from "../pages/login/login";


import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";


/**
 * declarations:模块内部Components组件、Directives指令、Pipes管道（angular1.x过滤器）的列表，声明一下这个模块内部成员
 *
 * imports：导入其他module，其他module暴露出的Components组件、Directives指令、Pipes管道等可以再本module的组件中被使用。比如导入CommonModule后就可以使用Ngif,NgFor等指令
 *
 * providers：指定应用程序的根级别需要使用的service服务。(angular2中没有模块级别的service，所以在NgModule中声明的Provider都是注册在根级别的Dependency Injector【依赖注入】中)
 *
 *exports：用来控制将哪些内部成员暴露给外部使用。导入一个module并不意味着会自动导入这个module内部导入的module所暴露出的公共成员。除非导入这个module把它内部导入的module写到exports中
 *
 * bootstrap：通常是app启动的根组件，一般只有一个component。bootstrap中的组件会自动被放入到entryComponents中。
 *
 * entryComponents:不会再模板中被引用到的组件。这个属性一般情况下只有ng自己使用，一般是bootstrap组件或者路由组件，ng会自动把bootstrap、路由组件放入其中。除非不通过路由状态将component加入到dom中，否则不会用到这个属性，
 *
 * */

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        Native,
        TabsPage,
        Person,
        Login
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp, {tabsHideOnSubPages: 'true'}/*, {
            links: [
                {component: HomePage,name:'Home',segment:'home'},
                {component: Person,name:'Home',segment:'person', defaultHistory: [HomePage]}
            ]
        }*/)  /*隐藏所有子页面的tabs*/
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        Native,
        TabsPage,
        Person,
        Login

    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}


