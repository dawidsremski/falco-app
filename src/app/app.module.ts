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
import {MapComponent} from './map/map.component';
import {FooterComponent} from './footer/footer.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MapComponent,
    HeaderComponent,
    HomeComponent,
    MainComponent,
    MissingPageComponent,
    FooterComponent,
    CounterComponent
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
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}