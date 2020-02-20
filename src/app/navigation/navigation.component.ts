import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(private breakpointObserver: BreakpointObserver, public router: Router) {
  }

  menuItems = [
    {
      title: 'Strona główna',
      link: '/'
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

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
