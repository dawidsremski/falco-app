import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-round-image',
  templateUrl: './round-image.component.html',
  styleUrls: ['./round-image.component.scss']
})
export class RoundImageComponent implements OnInit {

  @Input() size;
  @Input() bgUrl;
  @Input() bgColor = '#fff';

  constructor() { }

  ngOnInit() {
  }
}
