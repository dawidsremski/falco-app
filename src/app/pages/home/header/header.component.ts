import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  bgPos = '50% 50%';
  bgYPosPercent = 50;
  @Input() parallax = 0.075;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {

    const y: number = window.pageYOffset;
    this.bgYPosPercent = (50 - this.parallax * y >= 0) ? 50 - this.parallax * y : 0;
    this.bgPos = '50% ' + this.bgYPosPercent + '%';
  }

  constructor() {
  }

  ngOnInit() {
  }
}
