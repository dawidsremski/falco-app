import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './navigation/navigation.component';
import {HeaderComponent} from './header/header.component';
import {SectionHeaderComponent} from './section-header/section-header.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import {RoundImageComponent} from './round-image/round-image.component';
import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {IntersectionObserverDirective} from './intersection-observer/intersection-observer.directive';
import {CookieSnackbarComponent} from './cookie-snackbar/cookie-snackbar.component';


@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    SectionHeaderComponent,
    FooterComponent,
    RoundImageComponent,
    LoadingSpinnerComponent,
    IntersectionObserverDirective,
    CookieSnackbarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    NavigationComponent,
    HeaderComponent,
    SectionHeaderComponent,
    FooterComponent,
    RoundImageComponent,
    LoadingSpinnerComponent,
    IntersectionObserverDirective,
    IntersectionObserverDirective,
    CookieSnackbarComponent
  ]
})
export class FalcoCommonModule {
}
