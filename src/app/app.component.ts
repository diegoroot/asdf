import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController } from '@ionic/angular';

//servicio
//import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  public selectedIndex = 0;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    //private dataService: DataService,
    private alertController: AlertController
  ) {
    this.initializeApp();
    //this.getData();
  }
  public appPages = [
    {
      title: 'Datos Personales',
      url: '/folder/Inbox',
      icon: 'mail'
    },
    {
      title: 'Eventos',
      url: '/folder/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Novedades',
      url: '/folder/Favorites',
      icon: 'heart'
    }
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  /*
  public getData() {
    this.dataService.getData().subscribe(
      res => {
        console.log(res.data);
        this.appPages = res.menus;
        console.log(this.appPages);
      },
      error => {
        console.log('error');
        const alert = this.alertController.create({
          header: 'Alert',
          subHeader: 'Subtitle',
          message: 'Error con la consulta.',
          buttons: ['Cancel', 'Open Modal', 'Delete']
        });
        alert.then(x => x.present());
      }
    );
  }
  */

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }


}
