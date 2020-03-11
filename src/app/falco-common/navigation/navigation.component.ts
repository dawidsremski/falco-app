import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {filter, map, shareReplay} from 'rxjs/operators';
import {NavigationStart, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('opaqueSolid', [
      state('opaque', style({
        backgroundColor: 'rgba(255,255,255,0)',
      })),
      state('solid', style({
        backgroundColor: 'rgba(255,255,255,1)',
      })),
      transition('* => *', [
        animate('.4s')
      ]),
    ])
  ]
})

export class NavigationComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver, public router: Router) {

    this.router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(() => {
      this.isToggled = false;
      this.isRouteChanging = true;
    });
  }

  isCookieDialogOpened = false;
  isToggled = false;
  isRouteChanging = false;
  @Input() menuItems: Array<any>;

  @ViewChild('topHeader', {read: ElementRef, static: false}) topHeader: ElementRef;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  // openSnackBar(): void {
  //   this.snackBar.openFromComponent(CookieSnackbarComponent);
  // }

  @HostListener('window:scroll') onScrollEvent() {

    const offset = this.topHeader.nativeElement.offsetHeight;
    const pageYOffset = window.pageYOffset;

    if (!this.isToggled && pageYOffset > offset) {
      this.toggleToolbar();
    }

    if (pageYOffset <= offset) {
      this.isRouteChanging = false;

      if (this.isToggled) {
        this.toggleToolbar();
      }
    }
  }

  toggleToolbar(): void {
    this.isToggled = !this.isToggled;
  }

  ngOnInit(): void {
    // if (this.cookieService.get('falco_cookies_accepted') !== 'true') {
    //   this.openSnackBar();
    // }
  }
}
