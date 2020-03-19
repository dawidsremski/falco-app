import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent {

  @Input() big = false;
  @Input() bgUrl: string;
  @Input() bgPos = '100% 50%';
  @Input() bgFixed = false;

  constructor() {
  }
}
