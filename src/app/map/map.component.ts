import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() config;
  @Input() markers = [];
  @Input() height;

  constructor() {
  }

  ngOnInit() {
  }
}
