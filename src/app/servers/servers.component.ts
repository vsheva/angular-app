import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',//в app.component.html по этому селектору ->server.component.html
  //selector:'[app-servers]',
  //selector: ".app-servers",
  template: `<app-server></app-server> <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
