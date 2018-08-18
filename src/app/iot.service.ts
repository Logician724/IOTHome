import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { getViewData } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class IotService {
  iotData = null;
  constructor(private socket: Socket) {
    socket.on('iotData', (data) => {
      if (!data) {
        return;
      }
      this.iotData = data;
    });
  }
}
