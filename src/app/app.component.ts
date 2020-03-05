import { Component } from '@angular/core';

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
      title: 'Praca',
      link: ''
    },
    {
      title: 'Zapytania ofertowe',
      link: ''
    },
    {
      title: 'Kontakt',
      link: ''
    },
  ];
}
