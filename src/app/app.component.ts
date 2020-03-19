import {Component, OnInit} from '@angular/core';
import * as WebFont from 'webfontloader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'falco-app';
  menuItems = [
    {
      title: 'Strona główna',
      link: '/'
    },
    {
      title: 'Tartak',
      link: '/tartak'
    },
    {
      title: 'Praca',
      link: '/praca'
    },
    {
      title: 'Zapytania ofertowe',
      link: '/zapytania-ofertowe'
    },
    {
      title: 'Kontakt',
      link: '/kontakt'
    },
  ];

  ngOnInit(): void {
    WebFont.load({
      google: {
        families: ['Montserrat:200:latin-ext', 'Open Sans:200,300,400:latin-ext', 'Material Icons']
      }
    });
  }
}
