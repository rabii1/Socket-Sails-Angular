import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NGX_SAILS_CONFIG, NgxSailsConfig} from '@aloreljs/ngx-sails';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const config: NgxSailsConfig = {
  uri: 'http://192.168.1.110:1439',
  // socket.io options
  options: {
         transports: ['polling', 'websocket'],
       autoConnect:false,
       
  },
  // default headers
  headers: {
  
  }
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CommonModule
    
  ],
  providers: [ {
    provide: NGX_SAILS_CONFIG,
    useValue: config
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
