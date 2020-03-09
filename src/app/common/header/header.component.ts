import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  bgPos = '100% 50%';
  bgYPosPercent = 50;
  @Input() parallax = 0.075;
  @Input() compact = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {

    const y: number = window.pageYOffset;
    this.bgYPosPercent = (50 - this.parallax * y >= 0) ? 50 - this.parallax * y : 0;
    this.bgPos = '100% ' + this.bgYPosPercent + '%';
  }

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
  }
}
