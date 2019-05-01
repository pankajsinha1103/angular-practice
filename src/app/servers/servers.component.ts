import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  disableButton :Boolean = false;
  newServerCreated: string = 'No new server is created';
  serverName: string = '';
  servers = ['Test Server 1', 'Test Server 2'];

  constructor() {
    setTimeout(() => {
        this.disableButton = true;
    }, 2000)
   }

  ngOnInit() {
  }
  createNewServer(){
    this.servers.push(this.serverName);
    this.newServerCreated = 'New server got created :' + this.serverName;
  }
}
