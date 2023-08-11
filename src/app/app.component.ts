import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activePageTitle = 'Lista';
  Pages = [
    {
      title: 'Artículos',
      url: '',
      icon: 'albums'
    },
    {
      title: 'Cursos',
      url: '/courses',
      icon: 'school'
    },
    // {
    //   title: 'Politica de privacidad',
    //   url: '/privacy-policies',
    //   icon: 'person'
    // }
  ];
  OptFooter = [
    {
      title: 'Sobre nosotros',
      url: '/about-us',
      icon: 'people-circle'
    },
    {
      title: 'Politica de privacidad',
      url: '/privacy-policies',
      icon: 'document-lock'
    }
  ];
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
