import { Component } from '@angular/core';
import { IotService } from './iot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public iotService: IotService) { }
}
