import {Component} from '@angular/core';
import {MatSnackBarRef} from '@angular/material/snack-bar';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-snackbar',
  templateUrl: './cookie-snackbar.component.html',
  styleUrls: ['./cookie-snackbar.component.scss']
})
export class CookieSnackbarComponent {

  constructor(public dialogRef: MatSnackBarRef<CookieSnackbarComponent>, public cookieService: CookieService) {
  }

  dismiss() {
    this.dialogRef.dismiss();
    this.cookieService.set('falco_cookies_accepted', 'true');
  }
}
