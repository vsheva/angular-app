import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',//в app.component.html по этому селектору ->server.component.html
  //selector:'[app-servers]',
  //selector: ".app-servers",
  //template: `<app-server></app-server> <app-server></app-server>`,
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.css']
})


export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!"

  constructor() {
    setTimeout(() =>{
      this.allowNewServer=true;
    }, 2000)
  }
  ngOnInit() {}

  onServerCreate() {
    this.serverCreationStatus="Server was created! Congratulations!"
  }

}
