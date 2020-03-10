import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
}
