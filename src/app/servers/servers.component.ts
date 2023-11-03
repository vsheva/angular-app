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
  serverName = "TestName"
  serverCreationStatus = "No server was created!"
  userName = ""
  serverCreated = false


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onServerCreate() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created! Congratulations! This is " + this.serverName;
  }

  onUpdateServerName(event) {
    this.serverName = event.target.value;
  }

  onUpdateUserName(event) {
    this.userName = event.target.value;
    this.userName = "";
  }


}
