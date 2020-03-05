import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './navigation/navigation.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {HeaderComponent} from './pages/home/header/header.component';
import {HomeComponent} from './pages/home/home.component';
import {FlexLayoutModule, FlexModule, GridModule} from '@angular/flex-layout';
import {MainComponent} from './pages/home/main/main.component';
import {MatCardModule} from '@angular/material/card';
import {MissingPageComponent} from './pages/missing-page/missing-page.component';
import {FooterComponent} from './footer/footer.component';
import {CounterComponent} from './counter/counter.component';
import {AgmCoreModule} from '@agm/core';
import {CookieSnackbarComponent} from './cookie-snackbar/cookie-snackbar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {CookieService} from 'ngx-cookie-service';
import { SectionHeaderComponent } from './common/section-header/section-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    HomeComponent,
    MainComponent,
    MissingPageComponent,
    FooterComponent,
    CounterComponent,
    CookieSnackbarComponent,
    SectionHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexModule,
    GridModule,
    MatCardModule,
    FlexLayoutModule,
    MatSnackBarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFC9h0XBTsS4xsYJA4dy05YeiK9OqA80Q'
    })
  ],
  entryComponents: [
    CookieSnackbarComponent
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
