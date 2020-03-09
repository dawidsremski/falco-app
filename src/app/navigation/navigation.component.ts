import {Component, Directive, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CookieSnackbarComponent} from '../cookie-snackbar/cookie-snackbar.component';
import {CookieService} from 'ngx-cookie-service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatToolbar} from '@angular/material/toolbar';

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
        animate('.3s')
      ]),
    ])
  ]
})

export class NavigationComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver, public router: Router, public snackBar: MatSnackBar,
              public cookieService: CookieService) {
  }

  isCookieDialogOpened = false;
  isToggled = false;
  @Input() menuItems: Array<any>;

  @ViewChild('topHeader', {read: ElementRef, static: false}) topHeader: ElementRef;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  openSnackBar(): void {
    this.snackBar.openFromComponent(CookieSnackbarComponent);
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {

    const offset = this.topHeader.nativeElement.offsetHeight;

    if (window.pageYOffset > offset && !this.isToggled) {
      this.toggleToolbar();
    }

    if (window.pageYOffset <= offset && this.isToggled) {
      this.toggleToolbar();
    }
  }

  toggleToolbar(): void {
    this.isToggled = !this.isToggled;
  }

  ngOnInit(): void {
    if (this.cookieService.get('falco_cookies_accepted') !== 'true') {
      this.openSnackBar();
    }
  }
}
