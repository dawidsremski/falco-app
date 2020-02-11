import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  height = '100vh';
  heightVh = 100;
  bgPos = '50% 50%';
  bgYPosPercent = 50;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {

    const y: number = window.pageYOffset;
    this.heightVh = (100 - 0.2 * y >= 0) ? 100 - 0.2 * y : 0;
    // this.height = this.heightVh.toString() + 'vh';
    this.bgYPosPercent = (50 - 0.075 * y >= 0) ? 50 - 0.075 * y : 0;
    this.bgPos = '50% ' + this.bgYPosPercent + '%';
  }

  constructor() {
  }

  ngOnInit() {
  }
}
