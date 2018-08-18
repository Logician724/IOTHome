import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { DataCardComponent } from './data-card/data-card.component';
import { IotService } from './iot.service';

const config: SocketIoConfig = {
  url: 'http://localhost:6000',
  options: {}
};

@NgModule({
  declarations: [
    AppComponent,
    DataCardComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [IotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
