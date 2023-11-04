import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .avail {
      color: dodgerblue;
    }
  `]
})

export class ServerComponent {
  serverId = 3;
  serverStatus = 'offline';

  constructor() {
    Math.random() > 0.5 ? this.serverStatus ="online" : this.serverStatus = "offline";

  }

  getServerStatus() {
    return this.serverStatus;
  }

  changeBack(){
    return this.serverStatus==='online'? 'green' : 'gray'
  }

}
