import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  bgPos = '50% 100%';
  bgYPosPercent = 100;
  @Input() parallax = 0.15;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {

    const y: number = window.pageYOffset;
    this.bgYPosPercent = (100 - this.parallax * y >= 0) ? 100 - this.parallax * y : 0;
    this.bgPos = '50% ' + this.bgYPosPercent + '%';
  }

  constructor() {
  }

  ngOnInit() {
  }
}
