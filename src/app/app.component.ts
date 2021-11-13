import { Component, OnInit } from '@angular/core';
import {SailsClient} from '@aloreljs/ngx-sails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'Socket-Sails-Angular';
  daten= "Getting info en cours ..."
  listAction:any=[];

  constructor ( private readonly sails: SailsClient) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  //  this._sailsService.connect("http://localhost:1337");
    // or
   
 

this.sails.io.connect()
this.sails.on('connect').subscribe((response:any) => {
 
 
  setTimeout(() => {
    this.daten="LoggedIn at : "+new Date().toUTCString()

  }, 3500);

 

  this.sails.get('/notifications/subscribeAdmins').subscribe((data:any)=>{
    console.log("service suscribe")
    console.log(data)
    this.sails.on('administrators').subscribe((response1:any) => {
      this.listAction.push({pers:response1.pers,datex:response1.datex,action:response1.action})
      console.log("new message")
      console.log(response1)
    });


  });

});
  }

   
  public listenForEvent(): void {
    this.sails.on('eventName').subscribe((response:any) => {});
  }
 
  public makeRequest(): void {
    this.sails.get('url').subscribe();
    this.sails.post('url', {foo: 'bar'}).subscribe((response:any) => {});
  }
 
  public emitEventWithoutAResponse(): void {
    this.sails.emit('eventName', 'arg1', 'arg2');
  }
 
  public emitEventWithAResponse(): void {
    this.sails.emitAndWait('eventName', 'arg1', 'arg2').subscribe((response:any)  => {})
  }

}
