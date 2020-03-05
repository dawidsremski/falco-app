import {Component, HostListener, Input, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CookieSnackbarComponent} from '../cookie-snackbar/cookie-snackbar.component';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver, public router: Router, public snackBar: MatSnackBar,
              public cookieService: CookieService) {
  }

  isCookieDialogOpened = false;

  @Input() menuItems: Array<any>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  openSnackBar(): void {
    this.snackBar.openFromComponent(CookieSnackbarComponent);
  }

  ngOnInit(): void {
    if (this.cookieService.get('falco_cookies_accepted') !== 'true') {
      this.openSnackBar();
    }
  }
}
