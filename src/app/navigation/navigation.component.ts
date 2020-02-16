import {Component, HostListener, Input} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(private breakpointObserver: BreakpointObserver, public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.resetToolbarColor();
      }
    });
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

  initialOpacity = 0.25;
  initialColor = `rgba(0,0,0, ${this.initialOpacity})`;
  initialColorNoOpacity = 'rgba(0,0,0,1)';

  opacity = this.initialOpacity;
  toolbarColor = this.initialColor;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  resetToolbarColor() {
    if (this.router.url === '/') {
      this.toolbarColor = this.initialColor;
    } else {
      this.toolbarColor = this.initialColorNoOpacity;
    }
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {

    if (this.router.url === '/') {
      const y: number = window.pageYOffset;
      this.opacity = (0.25 + 0.01 * y <= 1) ? 0.25 + 0.01 * y : 1;
      this.toolbarColor = 'rgba(0,0,0,' + this.opacity.toString() + ')';
    }
  }
}
