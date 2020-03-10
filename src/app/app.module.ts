import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './pages/home/home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MainComponent} from './pages/home/main/main.component';
import {MissingPageComponent} from './pages/missing-page/missing-page.component';
import {CounterComponent} from './counter/counter.component';
import {AgmCoreModule} from '@agm/core';
import {CookieSnackbarComponent} from './cookie-snackbar/cookie-snackbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FalcoCommonModule} from './falco-common/falco-common.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    MissingPageComponent,
    CounterComponent,
    CookieSnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFC9h0XBTsS4xsYJA4dy05YeiK9OqA80Q'
    }),
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    FalcoCommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
