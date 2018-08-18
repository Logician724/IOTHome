import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.css']
})
export class DataCardComponent implements OnInit {
  @Input() value: any;
  @Input() key: any;
  constructor() { }

  ngOnInit() {
  }

}
