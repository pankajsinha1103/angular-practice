import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: Number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() <= 0.5 ? 'offline' : 'online';
  }

  ngOnInit() {
  }

  getColor(){
    return this.serverStatus === 'offline' ? 'red' : 'green';
  }

}
